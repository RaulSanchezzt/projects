module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cffp4p82i3mg6p9gdnog-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_8pjb'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'fLCtwPVdPULbi6oD7kR0JGM0zmHxE5p7'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
