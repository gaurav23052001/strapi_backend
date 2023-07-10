module.exports = {
    routers:[
        {
            method:'GET',
            path: '/order/pretransaction',
            handler: 'custom.pre',
        },
    ],
};