
const { SaveChatMessage } = require('../../../utils');
const { Joi } = require("../../../lib");
const { validate } = require("../../../middlewares");
const bodyParser = require("body-parser");


const CONTROLLER = [
    bodyParser.urlencoded({ extended: true }),
    validate({
        body: Joi.object().keys({
            user: Joi.string(), //.required(),
            message: Joi.string().required(),
        }).required(),
    }),
    async function handleChatMessage(req, res) {
        try {
            const io = await req.app.get('socketio');
            let { user, message } = req.body
            user = 'shamil'
            const chatMessage = await SaveChatMessage.saveChatMessage(user, message);
            io.emit('chat message', chatMessage);
            res.status(200).send('msg send')
        } catch (error) {
            console.error('Error handling chat message:', error.message);
        }
    }
]
module.exports = CONTROLLER


