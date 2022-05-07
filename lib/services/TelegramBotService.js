const TelegramBotAPI = require("node-telegram-bot-api");
const ExplorerController = require("../controllers/ExplorerController");
require('dotenv').config()


// replace the value below with the Telegram token you receive from @BotFather


class TelegramBot{
    static onText (){
        this.bot = new TelegramBotAPI(process.env.TOKEN, {polling: true}); 
        this.bot.onText(/\/echo (.+)/, (msg, match) => {
            // 'msg' is the received Message from Telegram
            // 'match' is the result of executing the regexp above on the text content
            // of the message
            const chatId = msg.chat.id;
            const resp = match[1]; // the captured "whatever"

            // send back the matched "whatever" to the chat
            bot.sendMessage(chatId, resp);
        });
    }
} 

module.exports = TelegramBot