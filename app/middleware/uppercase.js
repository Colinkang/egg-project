module.exports = () => {
    return async function uppercase(ctx, next) {
        ctx.request.body.username = ctx.request.body.username.toUpperCase();
        await next();
    };
};