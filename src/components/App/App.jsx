import {useEffect, useState} from 'react'
import axios from 'axios';


import Header from '../Header/Header.jsx'
import './App.css';
import Item from '../Item/Item.jsx';


function App() {

    const [item, setItem] = useState([])

    useEffect(() => {
        fetchItem();
    }, [])

    const fetchItem = () => {
        axios({
            method: 'GET',
            url: '/api/groceries'
        })
        .then((response) => {
            console.log('this is our grocery data', response.data)
            setItem(response.data)

        })
        .catch((error) => {
            console.log('error in GET /api/groceries client side', error)
        })
    }


return (
        <div className="App">
            <Header />
            <main>
                <h1>Shopping List</h1>
                    <Item item = {item} fetchItem = {fetchItem}/>
            </main>
        </div>
    );
}


//jsx / html article element 
export default App;
