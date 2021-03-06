module.exports = {
    purge: {
        mode: 'all',
        content: ['./src/**/*.ts', './src/**/*.tsx'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: (theme) => theme('colors'),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
