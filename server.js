import express from 'express'; 

const app = express();

app.get('/users', (req, res) => {
    res.send('Server running successfully!')
})






app.listen(3000)