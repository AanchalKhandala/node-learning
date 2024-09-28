//Intro to express
const express=require('express');
const reqFilter=require('./middleware');
const app=express(); //instense of express
const route = express.Router();

route.use(reqFilter);
app.get('',(req,res)=>{   //'' for home page  
    res.send('Hello, This is Home page')
});

route.get('/about',reqFilter,(req,res)=>{   
    res.send('Hello, This is About page')
});
route.get('/contact',reqFilter,(req,res)=>{   
    res.send('Hello, This is contact page')
});
app.use('/',route);
app.listen(5000);

// access HTML page
/*
const path=require('path'); // help to access folder 
const publicPath= path.join(__dirname,'public');
app.use(express.static(publicPath));
 */

// remove extension fron URL
/* 
app.get('',(req,res)=>{    
    res.sendFile(`${publicPath}/index.html`);
});
app.get('/about',(req,res)=>{   
    res.sendFile(`${publicPath}/about.html`);
});
app.get('*',(req,res)=>{   // for wrong url
    res.sendFile(`${publicPath}/404.html`);
});

//ejs dynamic data rendering
app.get('/profile',(req,res)=>{
    const user={
        name:'aanchal',
        email:'aanchal@gmail.com',
        city:'indore'
    }
    res.render(`profile`,{user});
})

//Middleware
const reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("please enter your age")
    }else if(req.query.age<18){
        res.send("yur can not access this page")
    }else{
        next();
    }
}
app.use(reqFilter)
*/