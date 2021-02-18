  const config = {
      development: {
          port: 3000,
          DB_CONNECTION: 'mongodb://localhost/hotels',
          SALT_ROUNDS: 10,
          SECRET: 'D794E179-A9DA-4958-AB10-D951152C23AD',
          COOKIE_NAME: 'USER_SESSION',
      },
      production: {
          port: 80,
          DB_CONNECTION: 'insert mongodb atlas connection here',
          SALT_ROUNDS: 10,
          SECRET: 'navuhodonosor',
          COOKIE_NAME: 'USER_SESSION',
      }
  };

  module.exports = config;