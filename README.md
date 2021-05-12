# Tools used

## Development

[Routify](https://github.com/sveltech/routify)

[Svelte](https://github.com/sveltejs/svelte)

[svelte-preprocess](https://github.com/sveltejs/svelte-preprocess)

## Deployment

[Netlify](https://docs.netlify.com/)

## Npm scripts

| Syntax        | Description                                                               |
| ------------- | ------------------------------------------------------------------------- |
| `dev`         | Development (port 5000)                                                   |
| `dev-dynamic` | Development with dynamic imports                                          |
| `build`       | Build a bundled app with SSR + prerendering and dynamic imports           |
| `serve`       | Run after a build to preview. Serves SPA on 5000 and SSR on 5005          |
| `deploy:*`    | Deploy to netlify or now                                                  |
| `export`      | Create static pages from content in dist folder (used by `npm run build`) |
