const visualizador = document.getElementById('preview-area');
const btnAdd = document.getElementById('add-box');
const btnRemove = document.getElementById('remove-box');
const btnSetFlex = document.getElementById('set-flex');
const btnSetGrid = document.getElementById('set-grid');
const wrapperFlex = document.getElementById('wrapper-flex');
const wrapperGrid = document.getElementById('wrapper-grid');

btnAdd.addEventListener('click', () => {
    const numeroActual = visualizador.children.length;
    const nuevoCuadro = document.createElement('div');
    nuevoCuadro.classList.add('box');
    nuevoCuadro.textContent = numeroActual + 1;
    visualizador.appendChild(nuevoCuadro);
});

btnRemove.addEventListener('click', () => {
    const ultimoCuadro = visualizador.lastElementChild;
    if (ultimoCuadro) visualizador.removeChild(ultimoCuadro);
});

btnSetFlex.addEventListener('click', () => {
    visualizador.style.display = 'flex';
    visualizador.style.gridTemplateColumns = '';
    visualizador.style.gridTemplateRows = '';
    visualizador.style.gap = '';
    wrapperFlex.classList.remove('hidden');
    wrapperGrid.classList.add('hidden');
});

btnSetGrid.addEventListener('click', () => {
    visualizador.style.display = 'grid';
    visualizador.style.gridTemplateColumns = 'repeat(3, 1fr)';
    wrapperGrid.classList.remove('hidden');
    wrapperFlex.classList.add('hidden');
});

document.querySelectorAll('.btn-flex').forEach(boton => {
    boton.addEventListener('click', () => {
        const prop = boton.getAttribute('data-prop');
        const val = boton.getAttribute('data-value');
        visualizador.style[prop] = val;
    });
});

document.querySelectorAll('.btn-grid').forEach(boton => {
    boton.addEventListener('click', () => {
        const prop = boton.getAttribute('data-prop');
        const val = boton.getAttribute('data-value');
        visualizador.style[prop] = val;
    });
});
