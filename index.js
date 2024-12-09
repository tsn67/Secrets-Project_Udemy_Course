import express from "express"
import bodyParser from "body-parser"
import axios from "axios"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.listen(port, ()=> {
    console.log("Server started at port"+port);
});

app.get("/", async (req, res) => {
    try {
        const response = await axios.get('https://secrets-api.appbrewery.com/random');
        res.render("index.ejs", {
            data: response.data
        });
    } catch(err) {
        res.send(500);
    }
});


