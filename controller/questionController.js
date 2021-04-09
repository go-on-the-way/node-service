'use strict';

import BaseController from './baseController'
import Question from '../models/question'

class QuestionController extends BaseController{
    constructor(){
        super()
    }

    async add(req, res, next,question={}){
        await Question.create({
            topic:'测试题',
            answer:'没有答案',
            create_time: '2021-04-09 12:22:30',
            update_time: '2021-04-09 12:22:30'
        })
        res.send('Question create!')
    }
}

export default new QuestionController()