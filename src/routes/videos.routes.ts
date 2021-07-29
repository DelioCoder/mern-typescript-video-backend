import {Router} from 'express';
const router = Router();

import { getVideos, getVideo, createVideo, updateVideo, deleteVideo } from '../controllers/video.controller';
//import * as videoCtrl from '../controllers/video.controller';

router.route('/')
    .get(getVideos)
    .post(createVideo);

router.route('/:id')
    .get(getVideo)
    .put(updateVideo)
    .delete(deleteVideo);

export default router;