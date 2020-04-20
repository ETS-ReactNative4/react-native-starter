module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    ["module-resolver", { root: ["./"] }],
    ["@babel/plugin-proposal-decorators", { legacy: true }]
  ]
};
