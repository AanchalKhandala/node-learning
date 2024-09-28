const dbConnection = require('./mongoDB');

const updateData= async () => {
    let data = await dbConnection();
    let result = await data.updateOne({
        {Brand:'Apple'},{
            $set:{Brand:'pple'}
        }
    }
);
    console.warn(result);
}
updateData();