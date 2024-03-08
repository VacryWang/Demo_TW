/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './node_modules/preline/preline.js',
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('preline/plugin'),
        require('@tailwindcss/forms'),
    ],
}

