const colors = require('tailwindcss/colors')

module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        fontFamily: {
            body: [
                "Noto Sans",
                "Segoe UI",
                "Roboto",
                "Helvetica Neue",
                "Arial",
            ],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
          },
        extend: {
            backgroundImage: (theme) => ({
                about: "url('../img/bg-about.png')",
                footer: "url('../img/bg-footer.png')",
            }),
            colors: {
                gray: {
                    150: "#EFF0F2",
                },
            },
            fontSize: {
                "xxs": "0.6rem",
                "7xl": "5rem",
                "8xl": "6rem",
            },
            lineHeight: {
                11: "2.75rem",
                12: "3rem",
                13: "3.25rem",
                14: "3.50rem",
                15: "3.75rem",
                16: "4rem",
                17: "4.25rem",
                18: "4.5rem",
            },
            width: {
                72: "18rem",
                80: "20rem",
                96: "24rem",
                footer: "30rem",
            },
            maxWidth: {
                72: "18rem",
                80: "20rem",
                96: "24rem",
                footer: "30rem",
            },
        },
    },
    variants: {},
    plugins: [],
};
