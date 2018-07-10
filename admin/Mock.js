'use strict';

const qs = require('qs');
const mockjs = require('mockjs');


module.exports = {
    //post请求  /api/users/ 是拦截的地址   方法内部接受 request response对象
    'POST /system/login'(req, res) {
        const { username, password } = qs.parse(req.query);
        console.log(username, password)
        //数据开始模拟
        if (username == 'guest' && password == 'guest') {
            setTimeout(() => {
                res.json({      //将请求json格式返回
                    success: true,
                    msg: '登录成功'
                });
            }, 200);
        } else {
            setTimeout(() => {
                res.json({      //将请求json格式返回
                    success: false,
                    msg: '登录失败'
                });
            }, 200);
        }
    },
}