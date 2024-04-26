import axios from 'axios'; 

function itemComponent({item, fetchItem}){

    console.log('item is:', item);

    const buyItem = () => {
        axios({
            method: 'PUT',
            url: `/api/groceries/${item.id}`
        })
    
        .then((response) => {
            fetchItem(); 
        })
        .catch((error) => {
            console.log('buying item failed:', error);
        })
    }

    const removeItem = () => {
        axios({
            method: 'DELETE',
            url: `/api/groceries/${item.id}`
        })
        .then((response) => {
            fetchItem(); 
        })
        .catch((error) => {
            console.log('removing item failed', error);
        })
    }


    return (
        <span>
                <p>{each.item}</p>
                <p>{each.quantity} {each.unit}</p>
                { item.isPurchased ?
                    <>
                        <button onClick={buyItem}>buy</button>
                        <button onClick={removeItem}>remove</button>
                    </>
                    :
                    <p>Purchased!</p>
                }
         </span>
    )
}



export default itemComponent