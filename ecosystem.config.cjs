module.exports = {
  apps: [
    {
      name: 'antigravity-proxy',
      script: 'src/index.js',
      args: '--strategy=sticky',
      watch: false,
      autorestart: true,
      max_restarts: 10,
      restart_delay: 5000,
      env: {
        NODE_ENV: 'production',
        PORT: 8080,
      },
    },
  ],
};
