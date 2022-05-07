class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }
    static getAmountOfExplorersByMission(explorers,mission){
        const amountXByMission = explorers.filter((explorer) => explorer.mission == mission);
        return amountXByMission.length;
    }
   static getExplorersUsernamesByMission(explorers, mission){
        const gitUsers = explorers.filter((explorer) => explorer.mission == mission).map((explorer) => explorer.githubUsername);
        return gitUsers;
    }
   
}

module.exports = ExplorerService;