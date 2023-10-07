module.exports = {
    mode: 'development', // Set mode to 'development'
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
    },
    devServer: {
      static: './', // Specify the directory to serve static files (your project root directory)
      port: 8080,  // Specify the port number
    },
    // ... other webpack configurations
  };
  