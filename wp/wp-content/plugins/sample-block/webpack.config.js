// エイリアスが解決しないのでwordpressが呼び出しているwebpackの設定に追記する

const defaultConfig = require('@wordpress/scripts/config/webpack.config')
const path = require('path')

module.exports = {
    ...defaultConfig,
    resolve: {
        ...defaultConfig.resolve,
        alias: {
            ...defaultConfig.resolve.alias,
            '@src': path.resolve(__dirname, 'src'), // エイリアスの設定
        },
    },
}
