const express = require('express')
const app = express()
const port = 8000




const arr = [
    {
        name: "Sarah",
        age: 20
    },
     {
        name: "omar",
        age: 20
    }
];



app.get('/', (req, res) => res.send('Hello World!'))

app.get("/users", (req, res) => {
    res.json(arr);
})

app.get("/search", (req, res) => {
    const {name, age} = req.query;
    let filterdArray = arr;
    if (name) {
        filterdArray = arr.filter(user => user.name.includes(name))
    
    }
    if (age) {
        filterdArray = arr.filter(user => user.age = age)
    }

    if (filterdArray.length === 0) {
        res.status(404).json('not found')
    } else if (filterdArray.length != 0) {
      
        res.status(200).json(filterdArray)
    }
})
app.listen(port, () => console.log(`worke !`))