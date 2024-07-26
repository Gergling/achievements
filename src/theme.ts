const colours = {
  primary: '#222727',
  secondary: '#cef',
  gold: 'gold',
  silver: 'silver',
  bronze: '#b07000',
  red: '#b00',
  yellow: 'yellow',
  green: 'green',
  blue: 'blue',
};

export const theme = {
  colours,
  app: {
    background: colours.primary,
    text: colours.secondary,
  },
  ratings: {
    gold: colours.gold,
    silver: colours.silver,
    bronze: colours.bronze,
  },
  pillars: {
    artistic: colours.red,
    social: colours.yellow,
    health: colours.green,
    career: colours.blue,
  }
};
