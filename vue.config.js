module.exports = {
    publicPath:process.env.NODE_ENV === 'production' ? '/' :'/web-tpl/',
    lintOnSave: false,
    chainWebpack:config => {
        config.plugins.delete('prefetch')
    },
    css:{
        loaderOptions:{
            sass:{
                data:`@import "@/assets/scss/_mixin.scss";`
            }
        }
    },
    devServer:{
        port:719,
    }
}
