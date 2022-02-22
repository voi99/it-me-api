module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'db-mysql-fra1-61675-do-user-10947905-0.b.db.ondigitalocean.com'),
      port: env.int('DATABASE_PORT', 25060),
      database: env('DATABASE_NAME', 'db-mysql-fra1-61675'),
      user: env('DATABASE_USERNAME', 'doadmin'),
      password: env('DATABASE_PASSWORD', 'nSmkhCs2pMegypl0'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
