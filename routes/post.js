const express=require('express');
const router=express.Router();
const Post= require("../models/Post");


router.get('/post', async (req,res)=>{ 
    try{
        const Postdata= await Post.find();
        res.send(Postdata);
     }
    catch (err){
        res.json({message: err});
    }
    
});

router.post('/post',(req,res)=>{
    const post=new Post({
        title:req.body.title,
        discription:req.body.discription
    });
    post.save()
    .then(data=>{res.json(data);})
    .catch(err=>{res.json({message:err});})

    console.log(req.body);
})
module.exports = router;