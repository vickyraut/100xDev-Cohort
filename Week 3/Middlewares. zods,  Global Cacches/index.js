const express =require("express");

const app = express();

// Ugly (DUMB) Way of doing prechecks
app.get("/health-checkup", function(req, res){
    const username = req.headers.username;
    const pass = req.headers.pass;
    const kidneyId = req.query.kidneyId;

    if(username != "vicky" || pass != "pass"){
        res.status(400).json({"msg":"Somethings up with your inputs"})
        return
    }

    if(kidneyId != 1 && kidneyId!= 2){
        res.status(400).json({"msg": "Something up with your inputs"})
        return
    }

    // do something with kideys
    res.json({
        msg:"Your kidney is fine!"
    })
});

app.listen(3000);

// Right way to do is Middlewares