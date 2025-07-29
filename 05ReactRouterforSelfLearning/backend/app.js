import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors({ origin: 'http://localhost:5173' }))

app.get('/', (req, res) => {
    try{
        res.send(
            {   "message": "Successfully Sent Data",
                "info": "Hello World"
            }
        )
    }
    catch(error){
        res.send(error.message)
    }
})

app.listen(3000, () => {
  console.log(`Example app listening on port 3000.....`)
})