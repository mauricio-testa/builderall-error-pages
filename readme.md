# Builderall Error pages Web Component

## Usage

### Add to document head

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