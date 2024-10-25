require('dotenv').config();

const JWT_SECRET=process.env.JWT_SECRET;
const PRECISION= 100;
const DB_URI=process.env.DB_URI;
module.exports ={ DB_URI, JWT_SECRET,PRECISION };