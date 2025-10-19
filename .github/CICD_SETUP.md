# CI/CD Setup for GDG Docs

## Overview
This repository uses GitHub Actions for automatic deployment to Google Cloud Run. Every push to the `main` branch triggers a build, test, and deployment pipeline.

## Pipeline Workflow

### 1. Build and Test Job
- ✅ Builds Docker image
- ✅ Tests the container locally
- ✅ Uploads image artifact for deployment

### 2. Deploy Job (only on main branch)
- ✅ Authenticates with Google Cloud
- ✅ Pushes image to Google Container Registry (GCR)
- ✅ Deploys to Cloud Run
- ✅ Provides deployment summary with URLs

## Setup Instructions

### Prerequisites
1. Google Cloud Project with Cloud Run API enabled
2. Service account with necessary permissions
3. GitHub repository with Actions enabled

### Step 1: Create Google Cloud Service Account

```bash
# Set your project ID
export PROJECT_ID="erudite-marker-465011-c6"

# Create service account
gcloud iam service-accounts create github-actions \
  --display-name="GitHub Actions CI/CD" \
  --project=$PROJECT_ID

# Grant necessary permissions
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:github-actions@${PROJECT_ID}.iam.gserviceaccount.com" \
  --role="roles/run.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:github-actions@${PROJECT_ID}.iam.gserviceaccount.com" \
  --role="roles/storage.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:github-actions@${PROJECT_ID}.iam.gserviceaccount.com" \
  --role="roles/iam.serviceAccountUser"

# Create and download service account key
gcloud iam service-accounts keys create github-actions-key.json \
  --iam-account=github-actions@${PROJECT_ID}.iam.gserviceaccount.com
```

### Step 2: Add GitHub Secret

1. Go to your GitHub repository settings
2. Navigate to **Settings → Secrets and variables → Actions**
3. Click **New repository secret**
4. Name: `GCP_SA_KEY`
5. Value: Paste the entire contents of `github-actions-key.json`
6. Click **Add secret**

**⚠️ Important:** Delete the `github-actions-key.json` file after adding it to GitHub:
```bash
rm github-actions-key.json
```

### Step 3: Verify Workflow File

The workflow is already configured in `.github/workflows/ci.yml`. It will:
- Trigger on every push to `main` branch
- Build and test the Docker image
- Deploy to Cloud Run (only on main branch pushes)

### Step 4: Test the Pipeline

1. Make a change to your repository
2. Commit and push to `main` branch:
   ```bash
   git add .
   git commit -m "Test CI/CD pipeline"
   git push origin main
   ```
3. Go to **Actions** tab in GitHub to see the workflow running
4. Once complete, check the deployment summary for the service URL

## Environment Variables

The following environment variables are set automatically:
- `PROJECT_ID`: Your Google Cloud project ID
- `SERVICE_NAME`: Cloud Run service name (gdg-docs)
- `REGION`: Deployment region (us-central1)
- `IMAGE_NAME`: Full GCR image path

## Manual Deployment (Fallback)

If you need to deploy manually, you can still use:

```bash
# Using gcloud CLI
gcloud builds submit --config cloudbuild.yaml .

# Or using the deploy script
bash deploy.sh
```

## Monitoring Deployments

### View Deployment History
```bash
gcloud run revisions list --service=gdg-docs --region=us-central1
```

### View Service Logs
```bash
gcloud run services logs read gdg-docs --region=us-central1
```

### Check Service Status
```bash
gcloud run services describe gdg-docs --region=us-central1
```

## Troubleshooting

### Build Fails
- Check Docker build locally: `docker build -t gdg-docs .`
- Review Dockerfile for errors
- Check GitHub Actions logs for detailed error messages

### Authentication Fails
- Verify `GCP_SA_KEY` secret is correctly set
- Ensure service account has proper permissions
- Check if APIs are enabled in Google Cloud

### Deployment Fails
- Verify Cloud Run API is enabled
- Check service account permissions
- Review Cloud Run logs: `gcloud run services logs read gdg-docs`

### Container Doesn't Start
- Test container locally: `docker run -p 8080:8080 gdg-docs`
- Check port configuration (must be 8080)
- Review container logs in Cloud Run console

## URLs

- **Cloud Run URL**: https://gdg-docs-426637717447.us-central1.run.app
- **Custom Domain**: https://docs.gdgalgiers.dev
- **GitHub Actions**: https://github.com/GDGAlgiers/gdg-docs/actions

## Security Notes

- ✅ Service account key is stored securely in GitHub Secrets
- ✅ Only `main` branch deployments are automated
- ✅ Pull requests are built and tested but not deployed
- ✅ Service account has minimal required permissions

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Google Cloud Run Documentation](https://cloud.google.com/run/docs)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
