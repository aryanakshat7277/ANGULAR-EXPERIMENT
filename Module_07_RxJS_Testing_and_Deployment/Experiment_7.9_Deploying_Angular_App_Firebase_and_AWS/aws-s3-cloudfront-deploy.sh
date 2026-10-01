#!/usr/bin/env bash
# Deploy Angular to AWS S3 & CloudFront
set -e

BUCKET_NAME="my-angular-22-bucket"
DISTRIBUTION_ID="E123456789EXAMPLE"

echo "Building production bundle..."
npm run build

echo "Syncing dist files to AWS S3..."
aws s3 sync dist/my-first-app/browser s3://$BUCKET_NAME --delete

echo "Invalidating CloudFront CDN cache..."
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"

echo "Deployment completed successfully!"
