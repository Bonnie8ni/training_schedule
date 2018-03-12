module.exports = {
  "extends": "airbnb",
  "rules": {
    "linebreak-style": 0,
    'no-console': 'off',
    "no-plusplus": [
      "error", {"allowForLoopAfterthoughts": true }
    ]
  },
  "env": {
    "jest": true
  }
};