require("dotenv").config();

const nextConfig = {
  env: {
    POSTGRES_URL: process.env.POSTGRES_URL,
    SUPABASE_URL: process.env.SUPABASE_URL,
  },
};

module.exports = nextConfig;
