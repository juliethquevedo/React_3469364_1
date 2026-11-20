/**
* Hook personalizado y reutilizable que simula el CRUD completo utilizando solo JavaScript en el
* navegador, sin backend ni base de datos. Se utiliza en las 4 pantallas: usuarios, categorías, subcategorías y productos.
* Además, mantiene el estado de la memoria sincronizado con el almacenamiento local para que la información no se pierda.
* si se recarga la página.
*/
function useCrudSimulado(claveStorage, datosIniciales) {
  // estado con la lista de registro el valor iniciales calcula
  // una sola vez, si hay datos guardados en localStorage los usa
  // si no arranca con datos iniciales

  const [lista, setLista] = useState(() => {
    const guardado = localStorage.getItem (claveStorage);

    return guardado ? JSON.parse(guardado) : datosIniciales;

  });

  // cada vez que lista cambia la devolvemos a guardar en
  // localStorage para no perder los cambios
  useEffect(() => {
    localStorage.setItem(claveStorage, JSON.stringify(lista));
  }, [claveStorage, lista]);
  //function useCrudSimulado(storageKey, initialData) {
  //Create: agrega un registro nuevo calculando in id autoincremental
  //(el maximo id actual + 1 igual que haria un autoincrementable en DB mysql )
  function agregar(datosNuevoRegistro) {
    setLista((listaActual) => {
      const nuevoId = listaActual.length > 0
        ? Math.max(...listaActual.map((registro) => registro.id)) + 1
        : 1;
      const registroNuevo = { id: nuevoId, activo: true, ...datosNuevoRegistro };
      return [...listaActual, registroNuevo];
    });
  }
      //UPDATE busca el registro por id y la mezcla los campos nuevos 
  //dejando el resto igual conserva lo que no se cambia 
  function actualizar(id, cambios) {
    setLista((listaActual) =>
      listaActual.map((registro) =>
        registro.id === id ? { ...registro, ...cambios } : registro
      )
    );
  }
  //DELETE logico no borra el registro de la lista sino lo desactiva en lugar de eliminar definitivamente
  function alternarEstado(id) {
    setLista((listaActual) =>
      listaActual.map((registro) =>
        registro.id === id ? { ...registro, activo: !registro.activo } : registro
      )
    );
  }
//We return everything a page needs: the data and the 3 actions
  return { lista, agregar, actualizar, alternarEstado };
}
export default useSimulatedCrud;
