import express from 'express'
import mongoose from 'mongoose'
import cards from './DbCards.js'
import cors from 'cors'

//2ZT55fKdeb3kSBkF

// AppConfig
const app = express()
const port = process.env.port|| 8001
const connection_url=`mongodb+srv://tinder-client:2ZT55fKdeb3kSBkF@cluster0.21fvk.mongodb.net/tinderdb?retryWrites=true&w=majority`;

//MiddleWare
app.use(express.json())
app.use(cors())

//DbConfig
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//APIendpoints
app.get('/', (req,res)=>res.status(200).send('HELLO EVERYONE!!!'))

app.post('/tinder/cards', (req,res)=>{
    const dbCard = req.body;
    cards.create(dbCard,(err,data)=>{
         if (err) {
            res.status(500).send(err);
        } else  {
            res.status(201).send(data);
        }
    });
});

app.get('/tinder/cards', (req,res)=>{
 
    cards.find((err,data)=>{
       /*  if (err) {
            res.status(500).send(err);
        } else  */{
            res.status(200).send(data);
        }
    });
});

//Listner
app.listen(port, ()=> console.log(`Listening on LocalHost : ${port}`))