const ExplorerController = require("./controllers/ExplorerController");
const TelegramBotAPI = require("node-telegram-bot-api");
const Reader = require("./utils/Reader");

const token = Reader.readToken() 
const bot = new TelegramBotAPI(token, {polling: true}); 
ExplorerController.getOnText(token);

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);

    if(!isNaN(numberToApplyFb)){
        const fizzbuzzTrick = ExplorerController.applyFizzbuzz(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, responseBot);
    } else {
        bot.sendMessage(chatId, "Envía un número válido");
    }

});