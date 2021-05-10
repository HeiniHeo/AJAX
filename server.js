const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); //app.get에 가기전에 사용함으로 다른 도메인도 허락해줌

app.get('/',(req,res)=>{
    res.json({
        success : true,
    });
});

app.listen(3000,()=>{
    console.log('server starting port 3000')
});