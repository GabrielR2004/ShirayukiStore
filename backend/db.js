const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_RU7Yk8CtVsKn@ep-curly-lake-ac5t0zsu-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require'
});

module.exports = pool;