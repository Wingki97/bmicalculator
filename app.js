const express = require("express");
const bodyParser = require ("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('bmi');
});

app.post('/', function(req, res) {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    res.render('bmi', {result: 'Your BMI Result is ' + (weight/ Math.pow(height/100,2)).toFixed(1)});
});

app.listen(3000, function () {
    console.log("serve started on port 3000");
});