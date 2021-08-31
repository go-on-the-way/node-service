'use strict';
// 启动爬虫的路由
import express from 'express'
const superagent = require('superagent') // 轻量ajaxAPI,特点：链式写法
require('superagent-charset')(superagent)// 添加字符集
const cheerio = require('cheerio') // 解析DOM,轻量(对比JSDOM)

const router = express.Router()

let urlQueue = ['https://bbs.tianya.cn/']
let count = 0 // 请求计数

/**
 * 抓取网页
 * @param {String} url 
 * @param {Object} req 
 * @param {Object} response 
 */
function grab(url,req,response){
    // 发起请求
    superagent.get(url)
      .charset('UTF-8')
      .end(function (err, res) {
        // 加载html
        const $ = cheerio.load(res.text);
        response.send($.html())
    })
}

router.get('/run', (req, res, next)=>{
    grab('https://bbs.tianya.cn/',req, res)
});

export default router