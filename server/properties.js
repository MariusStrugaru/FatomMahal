module.exports = {
  MahalTrade_db: {
    name: "mahaltrade_db",
    user: "postgres",
    password: null,
    host: process.env.DB_HOST || "127.0.0.1",
    port: 5432,
    dialect: "postgres"
  },


  // Factom properties
  factom: {
    config: {
      baseUrl: "https://ephemeral.api.factom.com/v1",
      accessToken: {
        appId: "myAppId",
        appKey: "myAppKey"
      }
    },
    model: {
      // Start Factom model properties
      Product: {
        factomized: "",
        has_identity: true
      },
      User: {
        factomized: "",
      },

      // End Factom model properties
    }
  },

  publicPath: "../client/build",
  port: 3000,
  tokenSecret: "Insert Your Secret Token",
  api: "/api"
};
