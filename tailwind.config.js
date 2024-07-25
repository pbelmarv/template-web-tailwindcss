/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        container: {
            padding: {
                DEFAULT: "15px",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "960px",
            xl: "1330px",
        },
        extend: {
            colors: {
                primary: "#242a2b",
                secondary: "#808080",
                accent: {
                    DEFAULT: "#1cbccf",
                    secondary: "#18abbc",
                    tertiary: "#98c6cd",
                },
                matisse: {
                    '50': '#f4f7fb',
                    '100': '#e7f0f7',
                    '200': '#cadeed',
                    '300': '#9cc2dd',
                    '400': '#66a2ca',
                    '500': '#4387b4',
                    '600': '#2f6690',
                    '700': '#29567b',
                    '800': '#254a67',
                    '900': '#243f56',
                    '950': '#182939',
                },
                astral: {
                    '50': '#f4f8fb',
                    '100': '#e8eff6',
                    '200': '#cbe0ec',
                    '300': '#9dc5dc',
                    '400': '#69a6c7',
                    '500': '#468bb1',
                    '600': '#3a7ca5',
                    '700': '#2b5a79',
                    '800': '#274c65',
                    '900': '#254155',
                    '950': '#192b38',
                },
                grey: {
                    primary: "#e8f0f1",
                },
            },
            fontFamily: {
                primary: "Poppins",
            },
            boxShadow: {
                custom1: "0px 2px 40px 0px rgba(8, 78, 78, 0.08)",
                custom1: "0px 0px 30px 0px rgba(8, 73, 81, 0.06)",
            },
            backgroundImage: {
                serices: "url(../img/services/bg.svg)",
                testimonials: "url(../img/testimonials/bg.svg)",
                departaments: "url(../img/departament/bg.svg)",
                quoteLeft: "url(../icons/testimonials/quote-left.svg)",
                quoteRight: "url(../icons/testimonials/quote-right.svg)",
            },
        },
    },
    plugins: [],
};
