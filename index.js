const hexToRgb = require('./hexToRgb');
const rgbToHex = require('./rgbToHex');
const rgbToHSL = require('./rgbToHSL');
var hex;
var rgb;
var hsl;



switch (process.argv[2]) {
    case "hex":
        hex = process.argv[3];
        rgb = hexToRgb(hex);
        hsl = rgbToHSL(rgb.r, rgb.g, rgb.b);
        console.log(rgb);
        console.log(hsl);
    break;
    case "rgb":
        rgb = [parseInt(process.argv[3]), parseInt(process.argv[4]), parseInt(process.argv[5])];
        hex = rgbToHex(parseInt(process.argv[3]), parseInt(process.argv[4]), parseInt(process.argv[5]));
        hsl = rgbToHSL(rgb[0], rgb[1], rgb[2]);
        console.log(hex);
        console.log(hsl);
    break;
    default:
        console.log("Input not recognized");
}