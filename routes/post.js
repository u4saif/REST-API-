const express=require('express');
const router=express.Router();
const Post= require("../models/Post");


router.get('/:count', async (req,res)=>{
    try{
        const Postdata= await Post.find().limit(Number(req.params.count));
        res.send(Postdata);
     }
    catch (err){
        res.json({message: err});
    }
});

router
.get('/', async (req,res)=>{ 
    try{
        const Postdata= await Post.find();
        res.send(Postdata);
     }
    catch (err){
        res.json({message: err});
    }
    
})
.post('/',(req,res)=>{
    const post=new Post({
        title:req.body.title,
        discription:req.body.discription
    });
    post.save()
    .then(data=>{res.json(data);})
    .catch(err=>{res.json({message:err});})

    console.log(req.body);
});

module.exports = router;