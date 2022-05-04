const express = require('express');

//Server start on port 5000 
const PORT = 5000;

const app = express();

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server has been started on PORT = ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();

