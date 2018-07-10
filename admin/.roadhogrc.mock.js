'use strict';

const qs = require('qs');
const mockjs = require('mockjs');


module.exports = {
    'POST /system/login'(req, res) {
        console.log(req.body)
        const { username, password } = req.body;
        console.log(username, password)
        //数据开始模拟
        if (username == 'guest' && password == 'guest') {
            res.json({
                success: true,
                msg: '登录成功',
                userInfo: {
                    username: 'guest'
                }
            });
        } else {
            res.json({
                success: false,
                msg: '登录失败'
            });
        }
    },
    'POST /system/logout'(req, res) {
       res.json({
           success: true
       })
    },
}