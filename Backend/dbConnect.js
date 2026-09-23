import oracledb from "oracledb";

const dbConnection = {
  user: process.env.ORACLE_USER,
  password: process.env.ORACLE_DB_PASSWORD,
  connectString: process.env.CONNECT_STRING,
};

async function makeConnection() {
  try {
    const connect=await oracledb.getConnection(dbConnection);
    console.log("Connected to Oracle - ");
    return connect
  } catch (error) {
    console.log("Error while connecting - ", error);
  }
}
export default makeConnection;
