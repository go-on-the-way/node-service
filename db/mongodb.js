'use strict';

import mongoose from 'mongoose';
import chalk from 'chalk';
const config = require('config-lite')({})
const dburl = config.mongodb.url

export function createConnection(){
    mongoose.connect(dburl, { autoIndex: false });
    
    const connect = mongoose.connection;
    
    connect.once('open' ,() => {
        console.log(
            chalk.green('连接数据库成功')
        );
    })
    
    connect.on('error', function(error) {
        console.error(
          chalk.red('Error in MongoDb connection: ' + error)
        );
        mongoose.disconnect();
    });
    
    connect.on('close', function() {
        console.log(
          chalk.red('数据库断开，重新连接数据库')
        );
        mongoose.connect(dburl, { server:{ auto_reconnect:true } });
    });

    return connect
}
