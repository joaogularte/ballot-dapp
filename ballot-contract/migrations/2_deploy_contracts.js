//Migrations to deploy any contracts

let Ballot = artifacts.require("Ballot");

module.exports = function (deployer) {
  deployer.deploy(Ballot, 4);
};
