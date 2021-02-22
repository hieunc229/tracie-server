module.exports = {
  apps : [{
    name: 'tracie-server',
    script: 'dist/index.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    // args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      TC_STORE_DIR: `./dev-data`,
      TC_HOST : 'localhost',
      TC_PORT : 8080,
      TC_ENDPOINT: `/tc`,
      TC_DASHBOARD_PATH: "/dashboard"
    },
    env_production: {
      NODE_ENV: 'production',
      TC_STORE_DIR: `./data`,
      TC_HOST : '0.0.0.0',
      TC_PORT : 80,
      TC_ENDPOINT: `/tc`,
      TC_DASHBOARD_PATH: "/dashboard"
    }
  }],
};
