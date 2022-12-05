const template = document.createElement('template');
template.innerHTML = `
	<div>
		<div class="builderall-error-404">
			<div>
				<h1 class="pre">Oopss!</h1>
				<h1 class="title">SOMETHING WENT WRONG</h1>
				<h2 class="text">Could not find the page you are looking for</h2>
				<a class="button" href="/">Back to home</a>
			</div>
		</div>
	</div>

	<style>
	.builderall-error-404 {
		background-repeat: no-repeat;
		text-align: center;
		height: calc(100vh);
		position: relative;
		display: block;
		font-family: Muli;
		background:
			url(./assets/img/404.png) top left/contain no-repeat,
			url(./assets/img/404-note-green.png) 90% 25%/105px no-repeat,
			url(./assets/img/404-note-pink.png) 80% 80%/105px no-repeat,
			#e5e9f0;
	}
	.builderall-error-404 div {
		padding: 12%;
	}
	@media screen and (max-width: 768px) {
		.builderall-error-404 {
			background: url(./assets/img/404.png) 25%/cover no-repeat;
		}
	}
	
	.builderall-error-404 div h1 {
		font-size: 2.3rem;
		line-height: 38px;
		font-weight: 800;
		color: #373F4E;
		text-transform: uppercase;
		margin-bottom: 1rem;
		margin-top: 0;
	}
	.builderall-error-404 div h2 {
		font-size: 1.2rem;
		line-height: 30px;
		font-weight: normal;
		color: #373F4E;
		text-align: center;
		display: block;
		margin-bottom: 1rem;
	}
	.builderall-error-404 a {
		margin-top: 1.5rem;
		font-size: .9rem;
		font-weight: 800;
		padding: 15px 30px;
		color: #fff;
		background-color: #0080fc;
		display: inline-block;
		color: #212529;
		text-align: center;
		vertical-align: middle;
		user-select: none;
		border-radius: 0.25rem;
		color: #fff;
		text-decoration: none;
	}
	</style>
`;

class BuilderallError404 extends HTMLElement {
    constructor() {
        super();
		

		document.body.style.margin = 0;
		document.body.style.backgroundColor = '#e9edf2';

		this.attachShadow({ mode: 'open'});
		this.shadowRoot.appendChild(template.content.cloneNode(true));

    }

	connectedCallback() {
		const props = [
			{ name: 'pre', selector: '.pre', attr: 'innerHTML'},
			{ name: 'title', selector: '.title', attr: 'innerHTML'},
			{ name: 'text', selector: '.text', attr: 'innerHTML'},
			{ name: 'button-text', selector: '.button', attr: 'innerHTML'},
			{ name: 'button-href', selector: '.button', attr: 'href'},
		]
		const shadow = this.shadowRoot;

		props.forEach(prop => {
			if (this.attributes[prop.name]) {
				shadow.querySelector(prop.selector)[prop.attr] = this.attributes[prop.name].value
			}
		});
	}
}

export default BuilderallError404