# Platform Applications

This repository holds the application-level GitOps manifests managed via Argo CD.

## 🔧 Structure


## 🚀 Adding a New App

1. Create your app folder in `apps/<your-app>/base` with deployment & service.
2. Create overlays in `apps/<your-app>/overlays/dev` and/or `prod`.
3. Add an Argo CD `Application` manifest to `argocd-apps/`.
4. Push and sync via Argo CD UI or CLI.

## ✅ Requirements

- Argo CD installed and configured.
- Cluster access to deploy namespaces used by overlays.

