var ConvertLib = artifacts.require("./ConvertLib.sol");
var FixedSupplyToken = artifacts.require("./FixedSupplyToken.sol");

module.exports = function(deployer) {
//  deployer.deploy(ConvertLib);
//  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(FixedSupplyToken);
};
