/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#a855f7",
                secondary: "#8af4ff",
            },
        },
    },
    plugins: [],
};
