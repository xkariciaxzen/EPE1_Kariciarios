const productos = [

    { nombre: 'manzana', categoria: 'fruta' },
    { nombre: 'banana', categoria: 'fruta' },
    { nombre: 'pera', categoria: 'fruta' },
    { nombre: 'naranja', categoria: 'fruta' },
    { nombre: 'lechuga', categoria: 'verdura' },
    { nombre: 'tomate', categoria: 'verdura' },
    { nombre: 'zanahoria', categoria: 'verdura' },
    { nombre: 'cebolla', categoria: 'verdura' },
    { nombre: 'apio', categoria: 'verdura' },
    { nombre: 'pimiento', categoria: 'verdura' }
  ];
  
  function filtrarproducto(categoria, nombre) {
    return productos.filtrarproducto(productos => {
      if (categoria && productos.categoria !== categoria) {
        return false;
      }
      if (nombre && productos.nombre.toLowerCase().indexOf(nombre.toLowerCase()) === -1) {
        return false;
      }
      return true;
    });
  }