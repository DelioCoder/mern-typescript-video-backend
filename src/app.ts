import express from 'express';
import cors from 'cors';
import config from './config';
import morgan from 'morgan';

import videoRoutes from './routes/videos.routes';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.set('port', config.PORT || 4000);
app.use(express.urlencoded({extended: false}));

app.use('/api/video', videoRoutes);

export default app;