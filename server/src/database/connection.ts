import knex from "knex";
import path from "path";

const connection = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  //setted to avoid the warning message on execute the migrate command
  useNullAsDefault: true,
});

export default connection;
