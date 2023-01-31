import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const dev = {
  db: {
    url: process.env.DB_URL || '',
  },
  app: {
    port: process.env.SERVER_PORT || '',
  },
  jwt: {
    access: process.env.JWT_ACCESS || '',
  },
};

export default dev;
