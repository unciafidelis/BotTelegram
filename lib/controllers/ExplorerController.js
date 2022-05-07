const ExplorerService = require("../services/ExplorerService");
const Reader = require("../utils/Reader");
const FizzBuzz = require("../services/FizzBuzzService");
let explorersReader = new Reader;
let xServices = new ExplorerService;
let fizzBuzzService = new FizzBuzz;

class ExplorerController {
    getExplorersByMission(mission){
        const explorers = explorersReader.readJsonPath("./explorers.json");
        const xByMission = xServices.filterByMission(explorers,mission);
        return xByMission;
    }
    getExplorersUsernamesByMission(mission){
        const explorers = explorersReader.readJsonPath("./explorers.json");
        const xUsersByMission = xServices.getExplorersUsernamesByMission(explorers,mission);
        return xUsersByMission;
    }
    getExplorersAmountByMission(mission){
        const explorers = explorersReader.readJsonPath("./explorers.json");
        const xAmountByMission = xServices.getAmountOfExplorersByMission(explorers,mission);
        return xAmountByMission;
    }
    getApplyValidationInNumber(number){
        const aValidationInNumber = fizzBuzzService.applyValidationInNumber(number);
        return aValidationInNumber;
    }
}
module.exports = ExplorerController;