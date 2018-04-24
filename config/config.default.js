module.exports = appInfo => {
    const config = {};
    config.keys = 'matrix key';
    config.security = {
        csrf: false
    };
    config.bodyParser = {
        jsonLimit: '1mb',
        formLimit: '1mb',
    };
    return config;
}