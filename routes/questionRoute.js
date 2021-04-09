'use strict';

import express from 'express'
import QuestionController from '../controller/questionController'
const router = express.Router()

router.get('/add', (req, res, next)=>{
    QuestionController.add(req, res, next)
});

export default router