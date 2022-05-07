const TelegramBotController = require("./controllers/TelegramBotController");
const Reader = require("./utils/Reader");
const token = Reader.readToken(); 
TelegramBotController.getOnMsg(token);
// Listen for any kind of message. There are different kinds of
// messages.
