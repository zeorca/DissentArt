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
        extend: {
            backgroundImage: (theme) => ({
                "about": "url('../img/bg-about.png')",
            }),
            colors: {
                gray: {
                    150: "#EFF0F2",
                },
            },
        },
    },
    variants: {},
    plugins: [],
};
