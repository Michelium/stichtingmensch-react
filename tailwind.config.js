/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: {
                sm: '600px',
                md: '728px',
                lg: '984px',
                xl: '1240px',
                '2xl': '1240px',
            },
        },
        extend: {
            colors: {
                'mensch-green': '#169454',
            },
        },
    },
    plugins: [],
}

