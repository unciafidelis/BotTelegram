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
        const token = process.env.TOKEN;
        return token
    }
    
}
module.exports = Reader;