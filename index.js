const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello my over over smarty node')
});


const users =[
    
    {id : 1, name: 'Sabana', email: 'sabana@gmail.com',phone: "01788888888"},
    {id : 2, name: 'Sabnur', email: 'sabnur@gmail.com',phone: "01788888888"},
    {id : 3, name: 'Sawon', email: 'sawon@gmail.com',phone: "01788888888"},
    {id : 4, name: 'Sabila', email: 'sabila@gmail.com',phone: "01788888888"},
    {id : 5, name: 'Sohana', email: 'sohana@yahoo.com',phone: "01788888888"}
]

//filter by query parameter----------->
app.get('/users', (req,res) =>{
    console.log('query', req.query)
    if(req.query.name){
            const search = req.query.name.toLowerCase();
            const match = users.filter(user => user.name.toLowerCase().includes(search));
            res.send(match);
    } else{
        res.send(users);
    }

});
app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana'])
} );

app.get('/user/:id', (req, res) =>{
   console.log(req.params)
   const id = parseInt(req.params.id);
   const user = users.find(item=> item.id === id);
   
    res.send(user);
})
app.post('/user',(req,res) =>{
    console.log('request', req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, ()=>{
    console.log('Listening my port', port)
});