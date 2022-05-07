const ExplorerService = require("../services/ExplorerService");
const Reader = require("../utils/Reader");
const FizzBuzz = require("../services/FizzBuzzService");
const TelegramBotService = require("../services/TelegramBotService")

class ExplorerController {
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonPath("./explorers.json");
        const xByMission = ExplorerService.filterByMission(explorers,mission);
        return xByMission;
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonPath("./explorers.json");
        const xUsersByMission = ExplorerService.getExplorersUsernamesByMission(explorers,mission);
        return xUsersByMission;
    }
    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonPath("./explorers.json");
        const xAmountByMission = ExplorerService.getAmountOfExplorersByMission(explorers,mission);
        return xAmountByMission;
    }
    static getApplyValidationInNumber(number){
        const aValidationInNumber = FizzBuzz.applyValidationInNumber(number);
        return aValidationInNumber;
    }
    static applyFizzbuzz(number){
        return FizzBuzz.applyValidationInNumber(number);
    }
    static getOnText(token){
        return TelegramBotService.onText(token)
    }
}
module.exports = ExplorerController;