
import express from 'express';
import { createCourse } from './routes';

const app = express();

app.listen(3333);

app.get("/", createCourse)
