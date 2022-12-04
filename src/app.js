import express from 'express';
import './config.js'
import router from './routes/client.routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();


const dirname = path.dirname(fileURLToPath(import.meta.url));


app.set('view engine', 'ejs');
app.set('views', path.join(dirname, 'views'));

//< middlewares
app.use(express.static(path.join(dirname,'public')));
app.use(express.urlencoded({extended: false}))
app.use(router)


export default app;