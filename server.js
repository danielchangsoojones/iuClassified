const express = require('express')
const app = express()

app.post('/duoPasscode', function (req, res) {
    res.send('POST request to the homepage');
    console.log(req.query.code);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))