class ExplorerService{
    filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }
    getAmountOfExplorersByMission(explorers,mission){
        const amountXByMission = explorers.filter((explorer) => explorer.mission == mission);
        return amountXByMission.length;
    }
    getExplorersUsernamesByMission(explorers, mission){
        const gitUsers = explorers.filter((explorer) => explorer.mission == mission).map((explorer) => explorer.githubUsername);
        return gitUsers;
    }
   
}

module.exports = ExplorerService;