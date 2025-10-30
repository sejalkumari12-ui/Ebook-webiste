import express from 'express'

const app = express ()

//Routes
//Http methods like GET,POST,PUT,PATCH AND MANY MORE

app.get("/", (req,res)=>{
    res.json({message : "welcome to elib apis"})
})


export default app;