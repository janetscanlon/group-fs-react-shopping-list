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




//SHOPPING LIST DELETE ROUTE
router.delete('/', (req,res) => {
    const sqlText = `
                        DELETE FROM groceries;`

    pool.query(sqlText)
    .then((dbRes) => {
        res.sendStatus(200)
    })
    .catch((dbErr) => {
        console.log('error in ShoppingList Clear:', dbErr)
        res.sendStatus(500)
    })
})


//SHOPPING LIST PUT ROUTE 
router.put('/', (req,res) => {
    const sqlText = `UPDATE groceries
                        SET "isPurchased"=FALSE 
                        WHERE "isPurchased"=TRUE;`
                        
    pool.query(sqlText)
    .then((dbRes) =>{
        res.sendStatus(200)
    })
    .catch((dbError) => {
        console.log('Error in ShoppingList', dbError)
        res.sendStatus(500)
    })
})



//PUT 


module.exports = router
















