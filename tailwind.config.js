module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                xs: '480px',
            },
        },
    },
    variants: {
        extend: {
            borderStyle: ['hover', 'active', 'focus'],
        },
    },
    plugins: [],
};
