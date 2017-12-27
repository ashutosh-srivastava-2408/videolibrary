const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');

const db = 'mongodb://127.0.0.1/videolibrary';
mongoose.Promise = global.Promise;

mongoose.connect(db,function(err){
	if(err)
	{
		console.log("Error! "+err);
	}
})

router.get('/videos',function(req,res){
	console.log("Get Request for all Videos");
	Video.find({})
	.exec(function(err,videos){
		if(err)
		{
			console.log("Error Retrieving Videos");
		}
		else
		{
			res.json(videos);
		}
	})
	
});

router.get('/video/:id',function(req,res){
	console.log("Get Request for a single Videos");
	Video.findById(req.params.id)
	.exec(function(err,videos){
		if(err)
		{
			console.log("Error Retrieving Videos");
		}
		else
		{
			res.json(videos);
		}
	})
	
});

router.post('/video',function(req,res){
	console.log("Post a Video");
	var newVideo = new Video();
	newVideo.title = req.body.title;
	newVideo.url = req.body.url;
	newVideo.description = req.body.description;
	newVideo.save(function(err,insertedvideo){
		if(err)
		{
			console.log("Error Saving Video");
		}
		else
		{
			res.json(insertedvideo);
		}
	})
});

router.put('/video/:id',function(req,res){
	console.log("Update a Video");
	Video.findByIdAndUpdate(req.params.id,
	{
		$set:{
			title:req.body.title,
			url:req.body.url,
			description:req.body.description
		}
	},
	{
		new:true
	},function(err,updatedVideo){
		if(err)
		{
			console.log("Error Updating Video");
		}
		else
		{
			res.json(updatedVideo);
		}
	});	
});

router.delete('/video/:id',function(req,res){
	console.log("Deleting Video")
	Video.findByIdAndRemove(req.params.id,function(err,deletedVideo){
		if(err)
		{
			console.log("Error Deleting Video");
		}
		else
		{
			res.json(deletedVideo);
		}
	})
});


module.exports = router;