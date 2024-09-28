const express=require('express');
const app=express(); 
const path=require('path');
const publicPath= path.join(__dirname,'public');
//app.use(express.static(publicPath));
app.set('view engine','ejs');
const reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("please enter your age")
    }else if(req.query.age<18){
        res.send("yur can not access this page")
    }else{
        next();
    }
}
//app.use(reqFilter);
app.get('/profile',(req,res)=>{
    const user={
        name:'aanchal',
        email:'aanchal@gmail.com',
        city:'indore',
        skills:['node','react','js','express']
    }
    res.render(`profile`,{user});
})
app.get('/login',(req,res)=>{
    res.render(`login`);
})
app.get('',(req,res)=>{   //'' for home page  
    res.sendFile(`${publicPath}/index.html`);
});
app.get('/about',reqFilter,(req,res)=>{   //'' for home page  
    res.sendFile(`${publicPath}/about.html`);
});
app.get('*',(req,res)=>{   //'' for home page  
    res.sendFile(`${publicPath}/404.html`);
});
app.listen(5000);


 





//handle asynchronous data in nodeJS
/*let a=10;
let b=0;

let waitingData= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(30);  //we can pass array, object, string any thing that we want
    }, 2000);
})
waitingData.then((data)=>{
    b=data;
    console.log(a+b)
})*/

//Asynchronous in nodeJS
/*console.log("helo1...")
setTimeout(() => {
    console.log("helo2...")
},2000);
console.log("hello3...")*/


//CURD opration in nodeJS
/*const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'curd');
const filePath=`${dirPath}/apple.txt`;

//Access file text
//fs.writeFileSync(filePath,'a simple text file');
//fs.readFile(filePath,'utf8',(err,item)=>{
//    console.log(item)
//})

//add extra text in file
//fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//    if(!err)console.log("file is updated")
//})

//rename file name
//fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//    if(!err)console.log("file is renamed")
//})

//Delete file
//fs.unlinkSync(`${dirPath}/fruit.txt`)
*/


//file list with file system
/*const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'files');
console.log(dirPath);
//for(i=0;i<5;i++){
//   fs.writeFileSync(dirPath+"/hello"+i+".txt",'a simple text file')
//}
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
console.log(item)
    })
})*/


//input from command lineyy  t6
/*
const fs=require('fs');
const { escape } = require('querystring');

const input = process.argv;
if(input[2]=='add'){
fs.writeFileSync(input[3],input[4])
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3])
}else{
    console.log("invalid input")
}
*/


/*console.log(process.argv[2]);*/


/*c`onst http =require('http');
const data = require('./data');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Contect-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000); */

//const app= require( './aap');
//const aap = require('./subdirectory/aap');

/*const colors = require('colors');
console.log("hello".red);'

console.log(app)
console.log(app.z())
const arr=[2,3,4,5,6,7,8];
let result=arr.filter((item)=>{
    console.log(item)
    return item===3
   // return item>3
})
console.log(result)

//core Modules
//there are two types of core module 1. global 2. non global
//1.Global: do not neet to defined
console.log("global core module")
console.log(__dirname)//print directory name
console.log(__filename)//print the file name
//2.non global: neet to defined
const fs= require('fs');//fs:file system
//const gs= require('fs');
//gs.writeFileSync("hello2.txt","second file Non global core module")
fs.writeFileSync("hello.txt","Non global core module")//hello.txt automatically created
fs.writeFileSync("hello2.txt","second file Non global core module")

//nodeMon
console.log("try Nodemon");

*/