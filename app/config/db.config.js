// module.exports = {
//   HOST: process.env.RDS_HOST || "localhost",
//   USER: process.env.RDS_USER || "root",
//   PASSWORD: process.env.RDS_PASSWORD || "root",
//   DB: process.env.RDS_DB || "germany"
// };
module.exports = {
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.DB_USER || "root",
  PASSWORD: process.env.DB_PASSWORD || "root",
  DB: process.env.DB_NAME || "germany"
};