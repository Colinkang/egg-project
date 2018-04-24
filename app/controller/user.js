// app/controller/user.js
const {
    Controller
} = require('egg');
const createRule = {
    username: {
        type: 'email',
    },
    password: {
        type: 'password',
        compare: 're-password',
    },
};
class UController extends Controller {

    async info(ctx) {
        console.log(11111,app,23333);
        ctx.body = {
            name: `hello ${ctx.params.id}`,
        };
        return;
    }
    async value(ctx) {
        ctx.body = {
            name: `hello`,
        };
        return;
    }

    async test(ctx) {
        try {
            console.log(ctx.request.body);
            ctx.validate(createRule);
            
            ctx.body = ctx.request.body;
            return;
        } catch (e) {
            console.log(e);
            ctx.body = {
                msg: e.message
            };
            return;
        }

    }

    async post(ctx) {
        ctx.body = {
            name: `hello1`,
        };
        return;
    }
}

module.exports = UController;