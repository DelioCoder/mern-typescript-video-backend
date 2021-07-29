import { RequestHandler } from 'express';
import Video from '../model/Video';

export const createVideo: RequestHandler = async (req, res) => {
    
    const videoFound = await Video.findOne({url: req.body.url})
    if(videoFound){
        return res.status(301).json({message: 'The URL already exists'});
    }

    const video = new Video(req.body)
    const savedVideo = await video.save()
    if(savedVideo) {
        res.status(202).json(savedVideo);
    }else {
        res.status(500).json({message: 'Error in creating video'})
    }
}

export const getVideos: RequestHandler = async (req, res) => {
    
    const videos = await Video.find();
    if(videos) {
        res.status(202).json(videos);
    } else {
        res.status(202).json({message: 'There are not videos yet'})
    }

}

export const getVideo: RequestHandler = async(req, res) => {

     const videoID = req.params.id;
     const videoFound = await Video.findById({_id: videoID});
     if(!videoFound) return res.status(204).json();
     return res.json(videoFound)
    

}

export const updateVideo: RequestHandler = async(req, res) => {
    const videoID = req.params.id;
    const videoUpdated = await Video.findByIdAndUpdate(videoID, req.body, { new: true });
    if(!videoUpdated) return res.status(204).json();
    res.json(videoUpdated);
}

export const deleteVideo: RequestHandler = async(req, res) => {
    
    const videoID = req.params.id;
    const videoFound = await Video.findByIdAndDelete({_id: videoID});
    if(!videoFound) return res.status(204).json();
    return res.json(videoFound);

}



