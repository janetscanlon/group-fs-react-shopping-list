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
        
    })
})


//SHOPPING LIST PUT ROUTE 

//PUT 


module.exports = router
















