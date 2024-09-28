const dbConnection=require('./mongoDB');
// //to handle promise
// dbConnection().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.warn(data);
//     })
// })
// //console.log(dbConnection()); //give promise

const main= async ()=>{
    let data = await dbConnection();
    data = await data.find().toArray();
    console.warn(data);

}
main();