import React from 'react'
import axios from 'axios'
//import itemComponent from './item.jsx'

function ShoppingList({item, fetchItem}){
    //I need a PUT route and DELETE route for these 

    //PUT route Reset button turns isPurchased back to false 
    const resetShoppingList = () => {
        //make a put request to change
        axios({
            method: 'PUT',
            url: `/api/groceries`
        })
        .then((response) => {
            //bring react state back into sync
            fetchItem()
        })
        .catch((error) => {
            console.log('ShoppingList Reset Error:', error)
        })
    }

    //DELETE route Clear button deletes all items from the table 
    const clearShoppingList = () => {
        axios({
            method: 'DELETE',
            url: `/api/groceries`
        })
            .then((response) => {
                //bring state back in sync with database state 
                fetchItem()
                console.log('DELETE shoppingList got a response!')
            })
            .catch((error) => {
                console.log('DELETE button in Shopping List error:', error)
            })
    }
    return(
        <>
        <h1>Shopping List</h1>
            <button onClick={resetShoppingList}>Reset</button>
            <button onClick={clearShoppingList}>Clear</button>
            {/* {item.map((item) => {
                return(
                    <item key={item.id}
                            item={item}
                            fetchItem={fetchItem}/>
                )
            })} */}
        </>
    )
}












export default ShoppingList