class Reader{

    static readJsonPath(filePath){
        const fs = require("fs");
        const rawdata = fs.readFileSync(filePath);
        const explorers = JSON.parse(rawdata);
        return explorers;
    }
    static readToken(){
        require('dotenv').config()
          // replace the value below with the Telegram token you receive from @BotFather
        let token = process.env.TOKEN;
        if(token === undefined){
            return token = "Token no recibido"
        }
        return token
    }
    
}
module.exports = Reader;