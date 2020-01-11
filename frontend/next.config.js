const withCSS = require('@zeit/next-css')


let config = {
    webpack: (config) => {
        config.resolve.modules = ['node_modules', 'src']
        return config
    }
}

config = withCSS({...config, cssModules: true})

module.exports = config
