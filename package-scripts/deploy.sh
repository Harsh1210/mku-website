#!/bin/bash

# Mohan Krushi Udyog Website Deployment Script
# This script builds and deploys the static website to AWS S3 and CloudFront

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration (update these values)
S3_BUCKET="your-bucket-name"
CLOUDFRONT_DISTRIBUTION_ID="your-distribution-id"
AWS_PROFILE="default"  # Change if you use a different AWS profile

echo -e "${YELLOW}Starting deployment of Mohan Krushi Udyog website...${NC}"

# Check if required environment variables are set
if [ -z "$VITE_GA_MEASUREMENT_ID" ]; then
    echo -e "${RED}Warning: VITE_GA_MEASUREMENT_ID is not set. Google Analytics will not work.${NC}"
    echo "Set it with: export VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX"
fi

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}AWS CLI is not installed. Please install it first.${NC}"
    exit 1
fi

# Check if the S3 bucket and CloudFront distribution are configured
if [ "$S3_BUCKET" = "your-bucket-name" ] || [ "$CLOUDFRONT_DISTRIBUTION_ID" = "your-distribution-id" ]; then
    echo -e "${RED}Please update the S3_BUCKET and CLOUDFRONT_DISTRIBUTION_ID variables in this script.${NC}"
    exit 1
fi

echo -e "${YELLOW}Step 1: Installing dependencies...${NC}"
npm install

echo -e "${YELLOW}Step 2: Building the application...${NC}"
npm run build

echo -e "${YELLOW}Step 3: Uploading files to S3...${NC}"
aws s3 sync dist/ s3://$S3_BUCKET --delete --profile $AWS_PROFILE

echo -e "${YELLOW}Step 4: Setting cache headers for static assets...${NC}"
# Set long cache for CSS, JS, and image files
aws s3 cp s3://$S3_BUCKET s3://$S3_BUCKET \
    --recursive \
    --exclude "*" \
    --include "*.css" \
    --include "*.js" \
    --include "*.png" \
    --include "*.jpg" \
    --include "*.jpeg" \
    --include "*.gif" \
    --include "*.svg" \
    --include "*.ico" \
    --metadata-directive REPLACE \
    --cache-control "public, max-age=31536000, immutable" \
    --profile $AWS_PROFILE

# Set shorter cache for HTML files
aws s3 cp s3://$S3_BUCKET s3://$S3_BUCKET \
    --recursive \
    --exclude "*" \
    --include "*.html" \
    --metadata-directive REPLACE \
    --cache-control "public, max-age=300" \
    --profile $AWS_PROFILE

echo -e "${YELLOW}Step 5: Creating CloudFront invalidation...${NC}"
INVALIDATION_ID=$(aws cloudfront create-invalidation \
    --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
    --paths "/*" \
    --profile $AWS_PROFILE \
    --query 'Invalidation.Id' \
    --output text)

echo -e "${GREEN}Invalidation created with ID: $INVALIDATION_ID${NC}"

echo -e "${YELLOW}Step 6: Waiting for invalidation to complete...${NC}"
aws cloudfront wait invalidation-completed \
    --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
    --id $INVALIDATION_ID \
    --profile $AWS_PROFILE

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo -e "${GREEN}Your website is now live and updated.${NC}"

# Get the CloudFront domain
CLOUDFRONT_DOMAIN=$(aws cloudfront get-distribution \
    --id $CLOUDFRONT_DISTRIBUTION_ID \
    --profile $AWS_PROFILE \
    --query 'Distribution.DomainName' \
    --output text)

echo -e "${GREEN}Website URL: https://$CLOUDFRONT_DOMAIN${NC}"

echo -e "${YELLOW}Next steps:${NC}"
echo "1. Test your website at the URL above"
echo "2. Check Google Analytics for tracking (may take 24-48 hours for data)"
echo "3. Set up custom domain if needed"
echo "4. Monitor CloudFront and S3 costs in AWS Console"