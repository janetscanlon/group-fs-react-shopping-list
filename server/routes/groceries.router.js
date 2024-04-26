const express = require('express')
const pool = require('../modules/pool')

const router = express.Router()
//GET /api/groceries
router.get('/', (req,res) => {
    const sqlText = `
                        SELECT * FROM "groceries"
                            ORDER BY "id";`

    
    pool.query(sqlText)
        .then((dbRes) => {
            res.send(dbRes.rows)
        })
        .catch((dbErr) => {
            console.log('error in GET:', dbErr)
            res.sendStatus(500)
        })
})

//POST /api/groceries 
router.post('/',(req,res) => {
    const country = req.body;
    const sqlText = `
        INSERT INTO groceries 
            (name, quantity, unit) 
            VALUES ($1, $2, $3) `;

            pool.query(sqlText, [item.name, item.quantity, item.unit])
        .then((result) => {
            console.log(`Added item to the database:`, item);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}:`, error);
            res.sendStatus(500); 
        })
})




//DELETE

//PUT 


module.exports = router
















