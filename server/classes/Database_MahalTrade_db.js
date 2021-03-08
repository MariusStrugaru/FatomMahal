// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_MahalTrade_db";
import UserModel from "../models/MahalTrade_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.MahalTrade_db.host +
        ":" +
        properties.MahalTrade_db.port +
        "//" +
        properties.MahalTrade_db.user +
        "@" +
        properties.MahalTrade_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.MahalTrade_db.name,
      properties.MahalTrade_db.user,
      properties.MahalTrade_db.password,
      {
        host: properties.MahalTrade_db.host,
        dialect: properties.MahalTrade_db.dialect,
        port: properties.MahalTrade_db.port,
        logging: false
      }
    );
    this.dbConnection_MahalTrade_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_MahalTrade_db;
  }
}

export default new Database();
