/**
 * @file mock 文件
 * @author shan-er
 */
module.exports = {
    '/common/getLoginInfo': {
        'code': 1,
        'msg': 'success',
        'data': {
            'pin': '@ctitle(5,10)'
        }
    },
    '/common/getList': {
        'code': 1,
        'msg': 'success',
        'data|5-10': [{
            'id|100000-2000000': 1,
            'pin': '@ctitle(5,10)',
            'name': '@ctitle(5,10)',
            'imgUrl': '@url',
            'width|1': [1000, 800, 600],
            'height|1': [300, 500, 600],
            'time': '@datetime'
        }]
    }
};