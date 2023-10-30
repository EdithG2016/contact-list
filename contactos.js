let contactos = [
    "Wilmer Gálvez",
    "Jimmy Gálvez",
    "Lizeth Gálvez",
    "Marylin Gálvez",
    "Erenia Gálvez",

]
    

function agregarContacto (nombre){
    let nuevoContacto = {nombre};
    contactos.push(nuevoContacto);
}
agregarContacto("Edith Gálvez");
agregarContacto("Zoe Gálvez");
agregarContacto("Benjamin Gálvez");
agregarContacto("Leticia Padilla");

function borrarContacto(nombre) {
    const indice = contactos.findIndex(contacto => contacto.nombre === nombre);
    if (indice !== -1) {
      contactos.splice(indice, 1);
    }
  }
  borrarContacto("Edith Gálvez");

  function imprimirContactos() {
    contactos.forEach(contacto => {
      console.log(contacto);
    });
  }

  imprimirContactos();
