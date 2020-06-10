import path from "path";

module.exports = {
  client: "sqlite3",
  //setting directories
  connection: {
    filename: path.resolve(__dirname, "src", "database", "database.sqlite"),
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "src", "database", "seeds"),
  },
  //setted to avoid the warning message on execute the migrate command
  useNullAsDefault: true,
};
