// module.exports = {
//   HOST: process.env.RDS_HOST || "localhost",
//   USER: process.env.RDS_USER || "root",
//   PASSWORD: process.env.RDS_PASSWORD || "root",
//   DB: process.env.RDS_DB || "germany"
// };
module.exports = {
  HOST: process.env.RDS_HOST || "epapa-db.crf61yx0mz5e.eu-central-1.rds.amazonaws.com",
  USER: process.env.RDS_USER || "admin",
  PASSWORD: process.env.RDS_PASSWORD || "germany_root5074",
  DB: process.env.RDS_DB || "epapa-db"
};