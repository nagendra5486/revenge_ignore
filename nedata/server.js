const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');



const app=express();

app.use(cors());
app.use(bodyParser.json());

const messages=[
    {id:1,text:'Hello World!'},
    {id:2,text:'Welcome to the message board!'}
];
app.get('/',(req,res)=>{
    res.json({messages});
});



app.post('/messages',(req,res)=>{
    const {text}=req.body;
    const newMessage={id:messages.length+1,text};
    if(!text){
        return res.status(400).json({error:'Text is required'});
    }
    if(text.length>20){
        return res.status(400).json({error:'Text must be less than 200 characters'});
    }
    if(messages.length>=5){
        return res.status(400).json({error:'Message limit reached'});
    }
    messages.push(newMessage);
    res.json(newMessage);
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});