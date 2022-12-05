import styles from './404.css'

const template = document.createElement('template');
const stylesheet =  document.createElement('style');
stylesheet.innerHTML = styles.toString();
template.innerHTML = `
	<div>
		<div class="builderall-error-404">
			<div>
				<h1 class="pre">Oopss!</h1>
				<h1 class="headline">Something Went Wrong</h1>
				<h2 class="text">Could not find the page you are looking for</h2>
				<a class="button" href="/">Back to home</a>
			</div>
		</div>
	</div>
`;

class BuilderallError404 extends HTMLElement {
    constructor() {
        super();

		document.body.style.margin = 0;
		document.body.style.backgroundColor = '#e9edf2';

		this.attachShadow({ mode: 'open'});
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.shadowRoot.appendChild(stylesheet)

    }

	connectedCallback() {
		const props = [
			{ name: 'pre', selector: '.pre', attr: 'innerHTML'},
			{ name: 'headline', selector: '.headline', attr: 'innerHTML'},
			{ name: 'text', selector: '.text', attr: 'innerHTML'},
			{ name: 'button-text', selector: '.button', attr: 'innerHTML'},
			{ name: 'button-href', selector: '.button', attr: 'href'},
		]
		const shadow = this.shadowRoot;

		props.forEach(prop => {
			if (this.attributes[prop.name]) {
				console.log(prop)
				shadow.querySelector(prop.selector)[prop.attr] = this.attributes[prop.name].value
			}
		});
	}
}

export default BuilderallError404