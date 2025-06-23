# Deployment Guide for Mohan Krushi Udyog Website

## Overview
This website is built as a static React application that can be deployed to Amazon S3 and served via CloudFront for global distribution.

## Prerequisites
- AWS Account with appropriate permissions
- AWS CLI installed and configured
- Node.js and npm installed locally
- Google Analytics account (for tracking setup)

## Google Analytics Setup

### Step 1: Create Google Analytics Property
1. Go to [Google Analytics](https://analytics.google.com)
2. Sign in with your Google account
3. Click "Start measuring" or "Create Property"
4. Enter your website details:
   - Property name: "Mohan Krushi Udyog"
   - Country/Region: India
   - Currency: Indian Rupee (INR)
5. Click "Next"

### Step 2: Set Up Data Stream
1. Choose "Web" as your platform
2. Enter your website details:
   - Website URL: Your domain (or temporary CloudFront URL)
   - Stream name: "Mohan Krushi Udyog Website"
3. Click "Create stream"

### Step 3: Get Your Measurement ID
1. After creating the data stream, you'll see the stream details
2. Copy the **Measurement ID** (starts with "G-", e.g., "G-XXXXXXXXXX")
3. Keep this ID safe - you'll need it for the website configuration

### Step 4: Configure Enhanced Measurements (Optional)
1. In your data stream settings, scroll to "Enhanced measurement"
2. Enable the following tracking:
   - Page views (enabled by default)
   - Scrolls
   - Outbound clicks
   - Site search
   - Form interactions
3. Click "Save"

### Step 5: Set Up Website with Analytics
Once you have your Measurement ID:
1. Add it to your environment variables in Replit Secrets
2. Or set it locally: `export VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
3. Rebuild your website: `npm run build`

### Step 6: Verify Analytics Setup
After deployment:
1. Visit your website
2. Go back to Google Analytics
3. Check "Reports" > "Realtime" to see if your visit appears
4. It may take 24-48 hours for full data to appear in reports

## Step 1: Build the Static Site

```bash
# Install dependencies
npm install

# Build the production version
npm run build
```

This creates a `dist` folder with all static files ready for deployment.

## Step 2: Set Up Amazon S3 Bucket

### Create S3 Bucket
1. Open AWS S3 Console
2. Click "Create bucket"
3. Choose a unique bucket name (e.g., `mohan-krushi-udyog-website`)
4. Select your preferred region
5. **Uncheck "Block all public access"** (required for website hosting)
6. Acknowledge the warning about public access
7. Click "Create bucket"

### Configure Bucket for Static Website Hosting
1. Go to your bucket
2. Click "Properties" tab
3. Scroll to "Static website hosting"
4. Click "Edit"
5. Select "Enable"
6. Index document: `index.html`
7. Error document: `index.html` (for SPA routing)
8. Click "Save changes"

### Set Bucket Policy
1. Go to "Permissions" tab
2. Click "Bucket policy"
3. Add this policy (replace `YOUR-BUCKET-NAME`):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
        }
    ]
}
```

## Step 3: Upload Files to S3

### Using AWS CLI
```bash
# Navigate to your project directory
cd /path/to/your/project

# Sync the dist folder to S3
aws s3 sync dist/ s3://YOUR-BUCKET-NAME --delete

# Set proper MIME types for CSS and JS files
aws s3 cp dist/ s3://YOUR-BUCKET-NAME --recursive --metadata-directive REPLACE --cache-control "public, max-age=31536000" --exclude "*" --include "*.css" --include "*.js"
```

### Using AWS Console
1. Go to your S3 bucket
2. Click "Upload"
3. Drag and drop all files from the `dist` folder
4. Click "Upload"

## Step 4: Set Up CloudFront Distribution

### Create CloudFront Distribution
1. Open AWS CloudFront Console
2. Click "Create distribution"
3. **Origin Settings:**
   - Origin domain: Select your S3 bucket from dropdown
   - Origin path: Leave empty
   - Origin access: "Origin access control settings"
   - Create new OAC if needed
4. **Default Cache Behavior:**
   - Viewer protocol policy: "Redirect HTTP to HTTPS"
   - Allowed HTTP methods: "GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE"
   - Cache policy: "Caching Optimized"
5. **Settings:**
   - Price class: Choose based on your needs
   - Alternate domain name: Add your custom domain if you have one
   - SSL certificate: Use default CloudFront certificate or upload custom
   - Default root object: `index.html`
6. Click "Create distribution"

### Configure Error Pages for SPA Routing
1. Go to your CloudFront distribution
2. Click "Error pages" tab
3. Click "Create custom error response"
4. **HTTP Error Code:** 404
5. **Error Caching Minimum TTL:** 300
6. **Customize Error Response:** Yes
7. **Response Page Path:** `/index.html`
8. **HTTP Response Code:** 200
9. Click "Create"

Repeat for error code 403.

## Step 5: Update S3 Bucket Policy for CloudFront

After creating the distribution, update your S3 bucket policy to only allow CloudFront access:

1. Go to CloudFront distribution settings
2. Copy the OAC (Origin Access Control) policy
3. Replace your S3 bucket policy with the provided OAC policy

## Step 6: Configure Custom Domain (Optional)

### If you have a custom domain:
1. **Add CNAME in CloudFront:**
   - Edit your distribution
   - Add your domain in "Alternate domain names"
   - Add SSL certificate via AWS Certificate Manager

2. **Update DNS:**
   - Create a CNAME record pointing your domain to the CloudFront distribution domain
   - Or use Route 53 for easier integration

## Step 7: Enable Compression and Caching

### Update CloudFront Cache Behaviors:
1. Edit your distribution
2. Go to "Behaviors" tab
3. Edit the default behavior
4. **Compress objects automatically:** Yes
5. **Cache policy:** Create custom policy if needed:
   - TTL settings: Min TTL: 0, Default TTL: 86400, Max TTL: 31536000
   - Cache headers based on specific headers
   - Include User-Agent header for mobile optimization

## Deployment Script

Create a deployment script for easy updates:

```bash
#!/bin/bash
# deploy.sh

echo "Building the application..."
npm run build

echo "Uploading to S3..."
aws s3 sync dist/ s3://YOUR-BUCKET-NAME --delete

echo "Creating CloudFront invalidation..."
aws cloudfront create-invalidation --distribution-id YOUR-DISTRIBUTION-ID --paths "/*"

echo "Deployment complete!"
```

Make it executable:
```bash
chmod +x deploy.sh
```

## Environment Variables

For Google Analytics to work, ensure your `VITE_GA_MEASUREMENT_ID` is set in your environment before building:

### Option 1: Environment Variable (Recommended)
```bash
# Set in your environment
export VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Then build
npm run build
```

### Option 2: Using Replit Secrets
1. In Replit, click on "Secrets" tab (lock icon)
2. Add a new secret:
   - Key: `VITE_GA_MEASUREMENT_ID`
   - Value: Your Google Analytics Measurement ID (G-XXXXXXXXXX)
3. Restart your development server

### Option 3: Local .env File (Development Only)
Create a `.env` file in your project root:
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Note:** Never commit the .env file to version control if it contains real analytics IDs.

## Performance Optimizations

### S3 Settings:
- Enable Transfer Acceleration if needed
- Use appropriate storage class

### CloudFront Settings:
- Enable Gzip compression
- Set appropriate cache headers
- Use HTTP/2
- Enable security headers

### Monitoring:
- Set up CloudWatch alarms
- Enable CloudFront logs if needed
- Monitor Google Analytics for traffic

## Costs
- S3: ~$0.023 per GB stored + data transfer
- CloudFront: ~$0.085 per GB for first 10TB + requests
- Route 53: ~$0.50 per hosted zone (if using custom domain)

## Security Best Practices
1. Use HTTPS only
2. Enable CloudFront security headers
3. Regular security updates for dependencies
4. Monitor access logs
5. Use IAM roles with least privilege

## Troubleshooting

### Website Issues
- **404 errors on routes:** Ensure error pages are configured correctly in CloudFront
- **Slow loading:** Check CloudFront cache settings and enable compression
- **CORS issues:** Usually not needed for static sites, but check if APIs are involved

### Google Analytics Issues
- **Analytics not working:** 
  - Verify VITE_GA_MEASUREMENT_ID is set correctly (starts with "G-")
  - Check browser developer console for any JavaScript errors
  - Ensure you've rebuilt the site after setting the environment variable
- **No data in GA reports:**
  - Wait 24-48 hours for data to appear
  - Check "Realtime" reports for immediate verification
  - Verify the Measurement ID matches exactly
- **Data not showing correctly:**
  - Ensure your website URL is correctly configured in GA property settings
  - Check if ad blockers are affecting analytics
- **Testing Analytics:**
  - Use Google Analytics Debugger browser extension
  - Check browser network tab to see if gtag requests are being sent
  - Use GA4 debug mode by adding `?gtm_debug=1` to your URL

## Maintenance
- Regular dependency updates: `npm audit fix`
- Monitor CloudFront costs and usage
- Update content as needed via deployment script
- Check Google Analytics for user insights