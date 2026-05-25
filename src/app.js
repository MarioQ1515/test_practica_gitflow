import { renderHeader } from './sections/header.js';
import { renderDashboard } from './sections/dashboard.js';
import { renderFooter } from './sections/footer.js';

export function renderApp() {
  return `
    ${renderHeader()}
    ${renderDashboard()}
    ${renderFooter()}
  `;
}

const app = globalThis.document?.querySelector('#app');

if (app) {
  app.innerHTML = renderApp();
}
