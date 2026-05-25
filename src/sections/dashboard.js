const practiceItems = [
  'Crear feature branches desde develop',
  'Abrir Pull Requests chicos',
  'Pedir cambios en una review',
  'Resolver conflictos antes de mergear',
  'Preparar una release con tag'
];

export function renderDashboard() {
  const items = practiceItems
    .map((item) => `<li>${item}</li>`)
    .join('');

  return `
    <section class="dashboard" aria-labelledby="practice-title">
      <h2 id="practice-title">Practicas disponibles</h2>
      <ul>${items}</ul>
    </section>
  `;
}
