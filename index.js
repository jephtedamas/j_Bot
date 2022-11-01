const express = require('express');
const path = require('path');
const app = express();
const fs = require("fs");
const Twitter = require("./config/twit");



//Set a static folder maniere du prof l'application tjr dependre du fichier. 
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));


app.get('/*', (rep, res) => {

    Twitter.get('search/tweets', params, function(err, data){
        let newData = JSON.stringify(data.statuses);
        
        fs.writeFile('./frontend/static/js/views/posts.json', newData, err => {
            if(err) throw err;
            // console.log("success");
        })
    });

    res.sendFile(path.resolve(__dirname, "frontend", "index.html")) // resolve = est resulat de la get
});


var params = {
    q: '@TheRock',
    result_type: 'recent',
    lang: 'en'
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));

