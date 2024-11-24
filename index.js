const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors()); // get data from server
app.use(express.json())  // for get data in server from client 

const users = [
    {id: 1, name: "Nure Alam", email: "nur@gmail.com"},
    {id: 2, name: "Saymon", email: "say@gmail.com"},
    {id: 3, name: "Jui", email: "jui@gmail.com"}
]

app.get("/", (req, res) => {
    res.send("User management server is running")
})

// Send user data to the client (GET request)
app.get("/users", (req, res) => {
    res.send(users)
})

// receive post: user data sent from the client (POST request)
app.post("/users", (req, res) => {
    console.log('post api hitting')
    console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`)
})