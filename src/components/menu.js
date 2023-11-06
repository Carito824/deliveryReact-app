import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Menu() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios.get('http://tu-api.com/menu')
      .then(response => setMenus(response.data))
      .catch(error => console.error(error));
  }, []);

  // Renderiza la lista de menús y agrega funcionalidad para crear, actualizar y eliminar menús.
  

}

export default Menu;