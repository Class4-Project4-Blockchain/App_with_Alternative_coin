const { createProxyMiddleware } = require('http-proxy-middleware'); module.exports = function (app) {
    app.use(createProxyMiddleware('/users', { target: 'https://localhost:3001', pathRewrite: { '^/users': '' }, changeOrigin: true }))

}