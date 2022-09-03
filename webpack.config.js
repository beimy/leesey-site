module.exports = {
    //... rest
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
      new Dotenv()
    ]
  };