const express = require('express')
const app = express()
var port = process.env.PORT || 1337;
app.set('port', port);

app.post('/duoPasscode', function (req, res) {
    res.send('POST request to the homepage');
    console.log(req.query.code);
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log('Example app listening on port'))