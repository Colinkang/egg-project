module.exports = app => {
    const {
        router,
        middleware,
        controller
    } = app;
    router.get('/user/:id', controller.user.info);
    router.post('/user/value',middleware.uppercase(), controller.user.value);
    router.post('/user/test', controller.user.test);
    router.resources('posts', '/posts', controller.posts);
}