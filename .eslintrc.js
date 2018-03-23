module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["react", "jsx-a11y", "import"],
  env: {
    browser: true,
    node: true,
    jasmine: true
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
  }
};
