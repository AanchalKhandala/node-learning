const dbConnection=require('./mongoDB');

const deleteData= async()=>{
   // console.log("delete data");
   let data = await dbConnection();
   let result = await data.deleteOne({Brand:'Apple'})
   console.warn(result);
   if(result.acknowledged){
    console.log("record deleted")
   }

}
deleteData();