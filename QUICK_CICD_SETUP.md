# Quick CI/CD Setup Guide

## What You Need to Do

### 1️⃣ Create Service Account Key

Run these commands in Google Cloud Shell or your terminal:

```bash
# Set your project ID
export PROJECT_ID="erudite-marker-465011-c6"

# Create service account
gcloud iam service-accounts create github-actions \
  --display-name="GitHub Actions CI/CD" \
  --project=$PROJECT_ID

# Grant permissions
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:github-actions@${PROJECT_ID}.iam.gserviceaccount.com" \
  --role="roles/run.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:github-actions@${PROJECT_ID}.iam.gserviceaccount.com" \
  --role="roles/storage.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:github-actions@${PROJECT_ID}.iam.gserviceaccount.com" \
  --role="roles/iam.serviceAccountUser"

# Create key
gcloud iam service-accounts keys create github-actions-key.json \
  --iam-account=github-actions@${PROJECT_ID}.iam.gserviceaccount.com

# Show the key (copy this entire output)
cat github-actions-key.json
```

### 2️⃣ Add Secret to GitHub

1. Go to: https://github.com/GDGAlgiers/gdg-docs/settings/secrets/actions
2. Click **New repository secret**
3. Name: `GCP_SA_KEY`
4. Value: Paste the entire JSON from the previous step
5. Click **Add secret**

### 3️⃣ Test It!

```bash
# Make any small change
echo "# CI/CD Test" >> README.md

# Commit and push
git add .
git commit -m "test: trigger CI/CD pipeline"
git push origin main
```

### 4️⃣ Watch It Deploy

Go to: https://github.com/GDGAlgiers/gdg-docs/actions

You'll see:
- ✅ Build and test job running
- ✅ Deploy job running (after tests pass)
- ✅ Deployment summary with URLs

## That's It! 🎉

From now on, every push to `main` will automatically:
1. Build your Docker image
2. Test it
3. Deploy to Cloud Run
4. Show you the deployment URL

## Cleanup

After adding the key to GitHub, delete it locally:
```bash
rm github-actions-key.json
```
