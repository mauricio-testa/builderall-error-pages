# Builderall Error Pages Web Component

## Usage

### Add inside the `<head>` tag

```html
<!-- required -->
<script src="https://cdn.jsdelivr.net/gh/mauricio-testa/builderall-error-pages@latest/dist/main.js"></script>
<!-- muli font - optional -->
<link href="https://cdn.jsdelivr.net/gh/mauricio-testa/builderall-error-pages@latest/assets/fonts/muli/muli.css" rel="stylesheet">
```

### Add to body
```html
<builderall-error-404
pre="Ops"
headline="Algo aconteceu mal!"
text="Não foi possível encontrar a página que você está procurando"
button-text="Voltar para a home"
button-href="/"
/>
```

> All parameters are optional

### Usage in Vue projects
See [this link](https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue)

## Development

Watch 
* `npm run watch`
* Open `index.html` in your browser

Build 
* `npm run build`

Purge jsdelivr cache
* [Purge main.js](https://purge.jsdelivr.net/gh/mauricio-testa/builderall-error-pages@latest/dist/main.js)
* [Purge muli.css](https://purge.jsdelivr.net/gh/mauricio-testa/builderall-error-pages@latest/assets/fonts/muli/muli.css)