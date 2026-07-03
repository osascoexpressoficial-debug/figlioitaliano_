# Figlio Italiano × Osasco Express — FIX DEFINITIVO GitHub Pages

Este pacote foi montado para corrigir o erro técnico de publicação.

## O que fazer agora

1. No repositório `figlioitaliano`, apague os arquivos antigos.
   Principalmente apague qualquer pasta `.github/workflows` antiga.
2. Extraia este ZIP.
3. Suba TODO o conteúdo extraído para a raiz do repositório.
   A raiz precisa ficar assim:

```
index.html
assets/
.nojekyll
.github/workflows/pages.yml
README.md
QA_DEPLOY_FIX.json
```

4. Vá em **Settings > Pages**.
5. Em **Build and deployment**, selecione **GitHub Actions**.
6. Faça um commit na branch `main` ou clique em **Actions > Deploy static site to GitHub Pages > Run workflow**.

## Importante

Não suba a pasta como subpasta.
O `index.html` precisa aparecer na raiz do repositório.

Este pacote inclui um workflow novo e correto com:
- `pages: write`
- `id-token: write`
- ambiente `github-pages`
- artifact do site estático apontando para a raiz.
