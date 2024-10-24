require('dotenv').config();

const JWT_SECRET=process.env.JWT_SECRET;
const PRECISION= 100000000000000;

module.exports ={ JWT_SECRET,PRECISION };