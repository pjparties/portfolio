/** @type {import('tailwindcss').Config} */

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                mono: ['Space Mono', ...defaultTheme.fontFamily.mono],  
                serif: [ 'Work Sans Variable', ...defaultTheme.fontFamily.serif],
            },
            colors: {
                background: '#fffef9',
                primary: '#3d56d9',
                accent : '#c54f90',
                secondary: '#27272acc'
            },
        },
        plugins: [],
    },
}