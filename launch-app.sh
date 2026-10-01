#!/usr/bin/env bash
# Angular 22 Experiments Zero-Dependency Launcher for Mac & Linux
PORT=8080
DOCS_DIR="$(cd "$(dirname "$0")/docs" && pwd)"

echo "============================================================"
echo "  Angular 22 Practical Lab Experiments - Standalone Preview  "
echo "============================================================"
echo "Zero installation required!"

if command -v python3 &> /dev/null; then
    echo "Serving via Python 3 on http://localhost:$PORT ..."
    cd "$DOCS_DIR"
    (sleep 1 && (xdg-open "http://localhost:$PORT" 2>/dev/null || open "http://localhost:$PORT" 2>/dev/null)) &
    python3 -m http.server $PORT
elif command -v node &> /dev/null; then
    echo "Serving via Node.js on http://localhost:$PORT ..."
    node "$DOCS_DIR/../server.js"
else
    echo "Could not find python3 or node. Please open docs/index.html in your browser."
fi
