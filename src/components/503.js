import styles from './503.css'
import shared from './shared.css'

const template = document.createElement('template');
const stylesheet = document.createElement('style');
stylesheet.innerHTML = styles.toString() + shared.toString();
template.innerHTML = `
  <div class="builderall-error-503 builderall-error-page">
    <div>
      <h1 class="headline">Maintenance mode</h1>
      <h2 class="text">We are doing some scheduled maintenance. Please try again in a few moments.</h2>
      <button class="button" onclick="javascript:location.reload()">
        Reload page
      </button>
    </div>
  </div>
`;

class BuilderallError503 extends HTMLElement {
  constructor() {
    super();

    document.body.style.margin = 0;
    document.body.style.backgroundColor = '#e9edf2';

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(stylesheet)
  }

  connectedCallback() {
    const props = [
      { name: 'headline', selector: '.headline', attr: 'innerHTML' },
      { name: 'text', selector: '.text', attr: 'innerHTML' },
      { name: 'button-text', selector: '.button', attr: 'innerHTML' },
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

export default BuilderallError503