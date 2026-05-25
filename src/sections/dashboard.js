const practiceItems = [
  'Crear feature branches desde develop',
  'Abrir Pull Requests chicos',
  'Pedir cambios en una review',
  'Resolver conflictos antes de mergear',
  'Preparar una release con tag'
];

const progressItems = [
  { label: 'PRs abiertos', value: 0 },
  { label: 'Reviews pendientes', value: 0 },
  { label: 'Releases publicadas', value: 0 }
];

export function renderDashboard() {
  const items = practiceItems
    .map((item) => `<li>${item}</li>`)
    .join('');

  const progress = progressItems
    .map((item) => `<li><strong>${item.value}</strong><span>${item.label}</span></li>`)
    .join('');

  return `
    <section class="dashboard" aria-labelledby="practice-title">
      <h2 id="practice-title">Practicas disponibles</h2>
      <ul>${items}</ul>
      <h2>Progreso del laboratorio</h2>
      <ul class="progress-list">${progress}</ul>
    </section>
  `;
}
