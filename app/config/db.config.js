module.exports = {
  HOST: process.env.RDS_HOST || "localhost",
  USER: process.env.RDS_USER || "root",
  PASSWORD: process.env.RDS_PASSWORD || "root",
  DB: process.env.RDS_DB || "germany"
};