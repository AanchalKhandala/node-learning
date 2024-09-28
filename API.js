const express = require('express');
const dbConnection= require('./mongoDB');
const mongodb = require('mongodb');
const app = express();

app.use(express.json);

app.get('/',async(req,res)=>{    //data read using get method
    let data= await dbConnection();
    data = await data.find().toArray();
    console.log(data)
    res.send(data)
});

app.post('/',async(req,res)=>{  // post menthod also udate data but its actual work is to add data
    //console.log(req.body);
    let data= await dbConnection();
    let result=await data.insertOne(req.body);
   // res.send(req.body);
   res.send(result);
})
app.listen(5000);

app.put('/:name', async(req,res)=>{ // data ko update krna hota h toh put api use krte h
    let data =await dbConnection();
    let result = data.updateOne(
        {name: req.params.name},{$set:res.body}
    )
    res.send({result:"update"});

})

app.delete('/:id', async (req,res)=>{   // delete data
   console.log(res.params.id);
   const data=await dbConnection();
   const result = await data.deleteOne({_id: new mongodb.ObjectId(res.params.id)});
    res.send(result);
})