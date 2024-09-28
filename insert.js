const dbConnection = require('./mongoDB');

const insert = async ()=>{
    const db= await dbConnection();
   // console.log("insert function calling...");
   const result = await db.insert(
    {name:'note 5', brand:'vivo', price:'234', category:'moblie'}
   );
if(result.acknowledged){
   console.log("data inserted")
}
}
insert();