// Datos de ejemplo de necesidades en Guatemala
const needsData = [
  { id: 1, title: 'Acceso a agua potable', description: 'Muchas comunidades carecen de acceso a agua potable, especialmente en áreas rurales.' },
  { id: 2, title: 'Educación básica', description: 'Niños y jóvenes de áreas marginadas no tienen acceso a una educación básica de calidad.' },
  { id: 3, title: 'Atención médica', description: 'Falta de centros de salud y atención médica adecuada en áreas remotas.' },
  // Puedes agregar más necesidades aquí
];

// Función para cargar las necesidades en la página
function loadNeeds() {
  const needsList = document.getElementById('needs-list');
  needsData.forEach(need => {
    const needElement = document.createElement('div');
    needElement.innerHTML = `
      <div class="solution">
        <h3>${need.title}</h3>
        <p>${need.description}</p>
      </div>
    `;
    needsList.appendChild(needElement);
  });
}

// Función para enviar una solución
function submitSolution(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const solution = document.getElementById('solution').value;
  // Aquí puedes implementar el envío de la solución a un servidor o realizar alguna otra acción necesaria
  console.log('Nombre:', name);
  console.log('Correo Electrónico:', email);
  console.log('Solución:', solution);
  // Limpiar el formulario después de enviar
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('solution').value = '';
  alert('¡Tu solución ha sido enviada! Gracias por tu contribución.');
}

// Cargar las necesidades al cargar la página
window.onload = loadNeeds;
