import React from 'react'
import axios from 'axios'
//import itemComponent from './item.jsx'

function ShoppingList({item, fetchItem}){
    //I need a PUT route and DELETE route for these 

    //PUT route Reset button turns isPurchased back to false 


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
            <button>Reset</button>
            <button onClick={clearShoppingList}>Clear</button>
        </>
    )
}












export default ShoppingList