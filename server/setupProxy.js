//setupProxy.js 
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/users',
        {
            target: 'http://localhost:3001',
            pathRewrite: { '^/users': '' },
            changeOrigin: true
        }))
    app.use(createProxyMiddleware('/users',
        {
            target: 'http://localhost:3000',
            pathRewrite: { '^/users': '' },
            changeOrigin: true
        }))
};