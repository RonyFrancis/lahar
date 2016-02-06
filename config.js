// Our server settings
var Config = function() {};

Config.prototype.remote = function() {
  return {
    server: {
      port: 1024,
      host: "localhost",
      allowHalfOpen: true
    },
    name: "HARRY"
  };
};

module.exports = new Config();
