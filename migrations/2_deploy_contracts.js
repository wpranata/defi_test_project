const TODOList = artifacts.require("../contracts/TODOList.sol");

module.exports = function(deployer) {
    deployer.deploy(TODOList);
};