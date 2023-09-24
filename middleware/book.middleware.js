
bookValidation=(req,res,next)=>{

    console.log("Inside the checking if the book validation");
    if(!req.body.title){
        res.status(403).send({
            message:"can not empty title"
        })
    }
    if(!req.body.author){
        res.status(403).send({
            message:"can not empty author"
        })
    }
    if(!req.body.published){
        res.status(403).send({
            message:"can not empty published"
        })
    }
    if(!req.body.publisher){
        res.status(403).send({
            message:"can not empty publisher"
        })
    }
    next();
};


module.exports={bookValidation};