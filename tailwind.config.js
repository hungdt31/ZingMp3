/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                mycolor: "#2a223a",
                menuText: "#938f99",
            },
            keyframes: {
                "slide-in-right": {
                    "0%": {
                        "-webkit-transform": "translateX(50px);",
                        transform: "translateX(50px);",
                        opacity: "0;",
                    },
                    "100%": {
                        "-webkit-transform": "translateX(0);",
                        transform: "translateX(0);",
                        opacity: "1;",
                    }
                  }
                },
                animation:{
                  'slide-in-right': 'slide-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;'
                }
        },
    },
    plugins: [],
};
