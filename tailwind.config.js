import headlessPlugin from "@headlessui/tailwindcss";
import formsPlugin from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";

export default {
  content: [
    "./slices/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./constants/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#1B1B1B",
        gold: {
          400: "#837A4A",
          500: "#837A4B",
        },
        zinc: {
          100: "#F2F2F4",
          200: "#E0E1E9",
          300: "#CACAD5",
          400: "#A4A4B2",
          500: "#878999",
          600: "#6C6E7A",
          700: "#36373D",
          800: "#26272B",
          900: "#1B1B1B",
        },
        indigo: {
          100: "#E0E6F6",
          200: "#C4CDEE",
          300: "#97A2CE",
          400: "#69739E",
          500: "#343B5E",
          600: "#262C50",
          700: "#1A1F43",
          800: "#10143E",
          900: "#09092D",
        },
        amber: {
          100: "#F8F6E3",
          200: "#F2EEC9",
          300: "#D9D2A1",
          400: "#B4AC7A",
          500: "#937A4B",
          600: "#706636",
          700: "#5E5325",
          800: "#4B4017",
          900: "#3E330E",
        },
        green: {
          100: "#C6F7CC",
          200: "#90FAA5",
          300: "#5DD27C",
          350: "#368D94",
          400: "#29915D",
          500: "#006397",
          600: "#005A38",
          700: "#004B36",
          800: "#003C32",
          900: "#00322E",
          950: "#0C434D"
        },
        yellow: {
          100: "#FEF7CC",
          200: "#FEEE99",
          300: "#FBE166",
          400: "#F8D440",
          500: "#F4BF03",
          600: "#D19F02",
          700: "#AF3101",
          800: "#8D6400",
          900: "#755000",
        },
        red: {
          100: "#FEE5D1",
          200: "#FECCA1",
          300: "#FC9D76",
          400: "#F97954",
          500: "#F63A1D",
          600: "#D31F15",
          700: "#B10E12",
          800: "#9E0916",
          900: "#760519",
        },
        stone: {
          50: "#F8F8F6",
          100: "#FEEEE9",
          200: "#E4E3E0",
          300: "#D6D3D1",
          400: "#ABA29E",
          500: "#78716C",
          600: "#67534E",
          700: "#443D38",
          800: "#292524",
          900: "#1C1917",
        },
        gray: {
          100: "#D0E8E9"
        }
      },

      //
      // The rest of your “extend” settings from before
      //
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        // Headline sizes
        "headline-6xl": [
          "4.5rem",
          {
            lineHeight: "5rem",
            letterSpacing: "0em",
          },
        ],
        "headline-5xl-desktop": [
          "4rem",
          {
            lineHeight: "4.5rem",
            letterSpacing: "0em",
          },
        ],
        "4.5xl": "2.5rem",
        "3.5xl": "2rem",
        "2.5xl": "1.75rem",
        // ...etc
        "body-lg": [
          "1.125rem",
          { lineHeight: "1.75rem", letterSpacing: "0em" },
        ],
        "body-md": ["1rem", { lineHeight: "1.5rem", letterSpacing: "0em" }],
        // etc.
      },
      letterSpacing: {
        0: "0",
        2: "0.2px"
      },
      lineHeight: {
        5: "1.25",
        12: "3rem",
        14: "3.5rem",
        20: "5rem"
      },
      maxHeight: {
        160: "40rem"
      },
      maxWidth: {
        58: "14.5rem",
        105: "26.25rem",
        152: "38.125rem",
        188: "47rem",
        mobile: "24.5rem",
        tablet: "46.5rem",
        desktop: "90rem",
      },
      spacing: {
        4.5: "1.125rem", 
        6.5: "1.625rem",
        18: "4.5rem",
        21: "5.25rem",
        22: "5.5rem",
        25: "6.25rem",
        30: "7.5rem",
        42: "10.5rem"
      },
      width: {
        70: "17.5rem",
        90: "90em",
        75: "75em",
        94: "23.5rem",
        188: "47rem",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
      },
      animation: {
        fade: "fadeOut 5s ease-in-out",
      },
      fontFamily: {
        sans: ["Inter", "sans"],
        inter: ["Inter", "sans"],
        abc: ["ABCArizona", "serif"],
      },
      container: {
        center: true,
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1400px",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [headlessPlugin, formsPlugin, typographyPlugin],
};
