import tinyColor from 'tinycolor2';

export const getLinearGradientBackgroundProperty = ({ colour }: {
  colour: string;
}) => {
  const dark = tinyColor(colour).darken(30).toRgbString();
  const light = tinyColor(colour).lighten(30).toRgbString();
  return {
    background: `linear-gradient(
      135deg, 
      ${light}, 
      ${dark}
    )`
  }
}