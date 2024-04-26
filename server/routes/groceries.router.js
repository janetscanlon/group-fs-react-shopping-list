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




//DELETE

//BUY ITEM - CHANGE TO PURCHASED PUT ROUTE  

router.put('/:id', (req, res) => {
    const sqlText = `
        UPDATE "groceries"
        SET "isPurchased" = TRUE
        WHERE "id" = $1;
    `
    const sqlValues = [req.params.id]

    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            res.sendStatus(200)
        })
        .catch((dbErr) => {
            console.log('PUT /groceries/:id error:', dbErr);
            res.sendStatus(500)
        })
})

//REMOVE ITEM FROM SHOPPING LIST 

router.delete('/:id', (req, res) => {
    const sqlText = `
        DELETE FROM "groceries"
        WHERE "id" = $1; 
    `
    const sqlValues = [req.params.id]

    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            res.sendStatus(200)
        })
        .catch((dbErr) => {
            res.sendStatus(500)
        })
})


module.exports = router
















