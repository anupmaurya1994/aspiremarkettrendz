import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import imageone from "./assets/images/imageone.png";
import imagetwo from "./assets/images/imagetwo.png";
import stocksimage from "./assets/images/stocks.jpg";
import marketimage from "./assets/images/market.jpg";


import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Whatsapp from "@material-ui/icons/WhatsApp";

export const headersData = [
    {
        Icon: Facebook,
        label: "facebook",
        href: "/mentors",
    },
    {
        Icon: Twitter,
        label: "twitter",
        href: "/account",
    },
    {
        Icon: Whatsapp,
        label: "whatsapp",
        href: "/account",
    },
];

export const imageCardList = [{
    image: imageone,
    textPrimary: "Three Top Ways to Trade the Rare Earth Boom",
    textSecondary: "Congress wants to move forward with $1 billion in fuding for the National Defense Stockpile to “acquire strategic and critical minerals currently..."
}, {
    image: imagetwo,
    textPrimary: "Three Top Ways to Trade the Rare Earth Boom",
    textSecondary: "Congress wants to move forward with $1 billion in fuding for the National Defense Stockpile to “acquire strategic and critical minerals currently..."
}, {
    image: imagetwo,
    textPrimary: "Three Top Ways to Trade the Rare Earth Boom",
    textSecondary: "Congress wants to move forward with $1 billion in fuding for the National Defense Stockpile to “acquire strategic and critical minerals currently..."
}, {
    image: imagetwo,
    textPrimary: "Three Top Ways to Trade the Rare Earth Boom",
    textSecondary: "Congress wants to move forward with $1 billion in fuding for the National Defense Stockpile to “acquire strategic and critical minerals currently..."
}];

export const stocksCardList = [{
    image: stocksimage,
    textPrimary: "Cases climb in Southeast Asia and Europe in latest week as BA.4 and BA.5 subvariants take hold",
    textSecondary: "The World Health Organization said COVID cases were lower overall in the week through June 19, but moved higher in Southeast Asia..."
}, {
    image: stocksimage,
    textPrimary: "Cases climb in Southeast Asia and Europe in latest week as BA.4 and BA.5 subvariants take hold",
    textSecondary: "The World Health Organization said COVID cases were lower overall in the week through June 19, but moved higher in Southeast Asia..."
}, {
    image: stocksimage,
    textPrimary: "Cases climb in Southeast Asia and Europe in latest week as BA.4 and BA.5 subvariants take hold",
    textSecondary: "The World Health Organization said COVID cases were lower overall in the week through June 19, but moved higher in Southeast Asia..."
}, {
    image: stocksimage,
    textPrimary: "Cases climb in Southeast Asia and Europe in latest week as BA.4 and BA.5 subvariants take hold",
    textSecondary: "The World Health Organization said COVID cases were lower overall in the week through June 19, but moved higher in Southeast Asia..."
}];

export const marketCardList = [{
    image: marketimage,
    textPrimary: "5 FTSE 250 Shares I’d Scoop Up For Dividends",
    textSecondary: "When looking for juicy dividends, there is life beyond the FTSE 100. Here are five FTSE 250 dividend shares I would consider buying for my portfolio. Dividends are never guaranteed..."
}, {
    image: marketimage,
    textPrimary: "5 FTSE 250 Shares I’d Scoop Up For Dividends",
    textSecondary: "When looking for juicy dividends, there is life beyond the FTSE 100. Here are five FTSE 250 dividend shares I would consider buying for my portfolio. Dividends are never guaranteed..."
}, {
    image: marketimage,
    textPrimary: "5 FTSE 250 Shares I’d Scoop Up For Dividends",
    textSecondary: "When looking for juicy dividends, there is life beyond the FTSE 100. Here are five FTSE 250 dividend shares I would consider buying for my portfolio. Dividends are never guaranteed..."
}, {
    image: marketimage,
    textPrimary: "5 FTSE 250 Shares I’d Scoop Up For Dividends",
    textSecondary: "When looking for juicy dividends, there is life beyond the FTSE 100. Here are five FTSE 250 dividend shares I would consider buying for my portfolio. Dividends are never guaranteed..."
}];

export const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);



export function time_ago(time) {

    switch (typeof time) {
        case 'number':
            break;
        case 'string':
            time = +new Date(time);
            break;
        case 'object':
            if (time.constructor === Date) time = time.getTime();
            break;
        default:
            time = +new Date();
    }
    var time_formats = [
        [60, 'seconds', 1], // 60
        [120, '1 minute ago', '1 minute from now'], // 60*2
        [3600, 'minutes', 60], // 60*60, 60
        [7200, '1 hour ago', '1 hour from now'], // 60*60*2
        [86400, 'hours', 3600], // 60*60*24, 60*60
        [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
        [604800, 'days', 86400], // 60*60*24*7, 60*60*24
        [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
        [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
        [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
        [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
        [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
        [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
        [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
        [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];
    var seconds = (+new Date() - time) / 1000,
        token = 'ago',
        list_choice = 1;

    if (seconds == 0) {
        return 'Just now'
    }
    if (seconds < 0) {
        seconds = Math.abs(seconds);
        token = 'from now';
        list_choice = 2;
    }
    var i = 0,
        format;
    while (format = time_formats[i++])
        if (seconds < format[0]) {
            if (typeof format[2] == 'string')
                return format[list_choice];
            else
                return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
        }
    return time;
}
