const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    productionSourceMap: false,
    lintOnSave: false,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@utils', resolve('src/utils'))
    },
    devServer: {
        proxy: {
            '/': {
                target: "http://10.4.93.239:3000/",
                changeOrigin: true,
                pathRewrite: {
                    '^/': 'http://10.4.93.239:3000/'
                }
            }
        }
    }
}