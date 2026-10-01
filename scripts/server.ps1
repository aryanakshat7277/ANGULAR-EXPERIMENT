param (
    [int]$Port = 8080,
    [string]$Path = "$PSScriptRoot\..\docs"
)

$Path = (Resolve-Path $Path).Path
if (-not (Test-Path $Path)) {
    Write-Host "Error: Directory '$Path' not found!" -ForegroundColor Red
    exit 1
}

$prefix = "http://localhost:$Port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
} catch {
    $Port = 8081
    $prefix = "http://localhost:$Port/"
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($prefix)
    $listener.Start()
}

Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  Angular 22 Practical Lab Experiments - Standalone Server  " -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "Serving: $Path" -ForegroundColor Yellow
Write-Host "URL:     $prefix" -ForegroundColor Green
Write-Host "Zero installation or dependencies required on any Windows PC!" -ForegroundColor White
Write-Host "Press Ctrl+C in this window to stop the server." -ForegroundColor Gray
Write-Host "============================================================" -ForegroundColor Cyan

Start-Process $prefix

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".mjs"  = "application/javascript; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".ico"  = "image/x-icon"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".svg"  = "image/svg+xml"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
    ".ttf"  = "font/ttf"
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawUrl = $request.RawUrl
        if ($rawUrl -match "\?") {
            $rawUrl = $rawUrl.Substring(0, $rawUrl.IndexOf("?"))
        }
        $relPath = $rawUrl.TrimStart("/").Replace("/", "\")
        if ([string]::IsNullOrWhiteSpace($relPath)) {
            $relPath = "index.html"
        }

        $filePath = Join-Path $Path $relPath
        if (-not (Test-Path $filePath) -or (Get-Item $filePath).PSIsContainer) {
            $filePath = Join-Path $Path "index.html"
        }

        if (Test-Path $filePath) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = "application/octet-stream"
            if ($mimeTypes.ContainsKey($ext)) {
                $mime = $mimeTypes[$ext]
            }
            $response.ContentType = $mime
            $response.Headers.Add("Access-Control-Allow-Origin", "*")

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
            $response.OutputStream.Close()
        } else {
            $response.StatusCode = 404
            $response.Close()
        }
    }
} finally {
    $listener.Stop()
    $listener.Close()
}
