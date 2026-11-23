const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');
const aprendizGuardado = localStorage.getItem('aprendiz');
const errorNombre = document.getElementById('errorNombre');

formulario.addEventListener('submit', function (event){
    event.preventDefault();

    const datos = new FormData(formulario);
    const aprendiz = {};
    
    for (const [campo, valor] of datos.entries()){
        aprendiz[campo] = valor;
    }

    aprendiz.acepta = datos.has('acepta') ? 'Si' : 'No';
    localStorage.setItem('aprendiz', JSON.stringify(aprendiz));
    mostrarAprendiz(aprendiz);
});

function mostrarAprendiz(aprendiz){
    resultado.replaceChildren();

    for (const campo in aprendiz){
        // const parrafo = document.createElement('p');
        // parrafo.textContent = `${campo}: ${aprendiz[campo]}`;
        // resultado.appendChild(parrafo);
        resultado.innerHTML+= `<p> ${campo} ${aprendiz[campo]}</p>`
    }
    formulario.reset()
    alert('Prendiz Registrado exitosamente');
}

if (aprendizGuardado){
    mostrarAprendiz(JSON.parse(aprendizGuardado));
}