// app/controller/user.js
const {
    Controller
} = require('egg');
class UserController extends Controller {
    async info(ctx) {
        ctx.body = {
            name: `hello ${ctx.params.id}`,
        };
        return;
    }
}

module.exports = UserController;