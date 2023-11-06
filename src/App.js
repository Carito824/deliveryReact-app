import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [menu, setMenu] = useState([]);
  
  const fetchMenuItems = async (itemId) => {
    try {
      const response = await axios.get(`http://localhost:3601/delivery/menu/${itemId}}`);
      return response.data.items;
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
};
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3601/delivery/menu/all');
      const menusArray = response.data.result.matchedItems;
      setMenu(menusArray);
      console.log('Datos Obtenidos:', response.data.result.matchedItems);
    } catch (error) {
      console.error('error al obtener los datos:', error);
    }
  };
    useEffect(() => {
    fetchData();
  }, []);
  


  return (
    <div>
      <h1>Menus</h1>
     <ul>
      {menu.map (( menuObj ) => (
              <li key = {menuObj.id} > {menuObj.name} {menuObj.description}
        <ul>
        {menuObj.items_id.map(async (itemId) => {
        const item = await fetchMenuItems(itemId);
        return <li key={item.id}>{item.name}</li>;
        })}
        </ul>
        </li>
        ))}
        </ul>
        </div>
  );
  
}

export default App;
