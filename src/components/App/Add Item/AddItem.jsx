import { useState } from 'react';
import axios from 'axios';


function ItemsForm({fetchItem}){
    const [itemInput, setItemInput] = useState('');
    const  [quantityInput, setQuantityInput] = useState('');
    const  [unitInput, setUnitInput] = useState('');

    const createItem = (event) => {
        event.preventDefault();

        axios({
      method: 'POST',
      url: '/api/groceries',
      data: {
        name: itemInput,
        quantity: quantityInput,
        unit: unitInput
      }
    })
      .then((response) => {
        fetchItem();
        setItemInput('');
        setQuantityInput('');
        setUnitInput('');
      })
      .catch((error) => {
        console.log('bummer:', error);
      })
    
  }
  return (
    <form onSubmit={createItem}>
      <input
        value={itemInputInput}
        onChange={(event) => {setItemInput(event.target.value)}}
        type="text" 
        placeholder="item"
        />
      <input
        value={quantityInput}
        onChange={(event) => {setQuantityInput(event.target.value)}}
        type="text" 
        placeholder="Quantity"
        />
         <input
        value={unitInput}
        onChange={(event) => {setUnitInput(event.target.value)}}
        type="text" 
        placeholder="Unit"
        />
      <button>Save</button>
    </form>
  )
}
    

















export default ItemsForm;