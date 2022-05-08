const TelegramBotService = require("../services/TelegramBotService")

class TelegramBotController{
    static getOnMsg(token){
        if (token == "Not a token"){
            return "Token not available"
        }
        else{
            return TelegramBotService.onMsg(token)
        }

    }
}

module.exports = TelegramBotController 