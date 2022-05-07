const TelegramBotAPI = require("node-telegram-bot-api");
const ExplorerController = require("../controllers/ExplorerController")

class TelegramBotService{
    static onMsg(token){
        if(token != "Not a token"){
            this.bot = new TelegramBotAPI(token, {polling: true});
            this.bot.onText(/\/echo (.+)/, (msg, match) => {
            // 'msg' is the received Message from Telegram
            // 'match' is the result of executing the regexp above on the text content
            // of the message
            const chatId = msg.chat.id;
            const resp = match[1]; // the captured "whatever"

            // send back the matched "whatever" to the chat
            this.bot.sendMessage(chatId, resp);
        });
        this.bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const numberToApplyFb = parseInt(msg.text);
        
            if(!isNaN(numberToApplyFb)){
                const fizzbuzzTrick = ExplorerController.applyFizzbuzz(numberToApplyFb);
                const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
                this.bot.sendMessage(chatId, responseBot);
            } else {
                this.bot.sendMessage(chatId, "Envía un número válido");
            }
        
        });
        } else{
            return "Token not available";
        }
    }
} 

module.exports = TelegramBotService