module.exports = {
  extends: [
    "stylelint-config-recommended-scss",
    "@mate-academy/stylelint-config"
  ],
  plugins: ["stylelint-scss"],
  rules: {},
  ignoreFiles: [
    "**/header.scss",
    "**/slider.scss"
  ]
};
