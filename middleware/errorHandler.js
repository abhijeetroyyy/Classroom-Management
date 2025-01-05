module.exports= (err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send({message: 'Internal Server Error'})
}
