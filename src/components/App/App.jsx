import {useEffect, useState} from 'react'
import axios from 'axios';


import Header from '../Header/Header.jsx'
import './App.css';


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
                    {item.map((each) => {
                        return(<span>
                                        <p>{each.item}</p>
                                        <p>{each.quantity} {each.unit}</p>
                                        <button>buy</button>
                                        <button>remove</button>
                                </span>)
                    })}
                    
            </main>
        </div>
    );
}


//jsx / html article element 
export default App;
