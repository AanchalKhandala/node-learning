module.exports= reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("please enter your age")
    }else if(req.query.age<18){
        res.send("yur can not access this page")
    }else{
        next();
    }
}