import './screens/dashboard';
import styles from './index.css';
import ShoppingItems, { AttributeItem } from './components/ShoppingCarItem/ShoppingCartItems';
import { appState } from './store/store';
class Appcontainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			const title = this.ownerDocument.createElement('h1');
			title.innerText = 'Lets go shopping';
			this.shadowRoot.appendChild(title);
			title.style.textAlign = 'center';
			title.style.color = '#ff4081';
			title.style.margin = '5px';
			title.style.fontFamily = 'Arial';

			const dashboard = this.ownerDocument.createElement('app-dashboard');
			this.shadowRoot.appendChild(dashboard);

			const cssProducts = this.ownerDocument.createElement('style');
			cssProducts.innerHTML = styles;
			this.shadowRoot?.appendChild(cssProducts);
		}
	}
}

customElements.define('app-container', Appcontainer);
