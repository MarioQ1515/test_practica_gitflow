import assert from 'node:assert/strict';
import { renderApp } from '../src/app.js';
import { renderDashboard } from '../src/sections/dashboard.js';

const html = renderApp();

assert.match(html, /Laboratorio de Pull Requests/);
assert.match(html, /Practicas disponibles/);
assert.match(html, /Pull Requests/);
assert.match(renderDashboard(), /Preparar una release con tag/);

console.log('All render tests passed.');
