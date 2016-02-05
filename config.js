// Our server settings
var Config = function() {};

Config.prototype.remote = function() {
  return {
    server: {
      port: 1024,
      host: "localhost",
      allowHalfOpen: true
    },
    bot: "HARRY"
  };
};

module.exports = new Config();
