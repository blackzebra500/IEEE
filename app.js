const express=require('express');
const app = express();
const port = 3000;


app.listen(port,()=>{
    console.log('서버가 실행됩니다. http://localhost:${port}');
});

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/main.html');
});



