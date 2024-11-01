import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: '640px',
        md: '640px',
        lg: '640px',
        xl: '640px'
      },
	 
    }, fontFamily:{
		primary: "var(--font-jetbrainsMonno)"
	  },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
	  animation:{
		"accordion-down":"accordion-down 0.2s ease-out",
		"accordion-up" : "accordion-up 0.2s ease-out",
	  },
	  
     /* backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },*/
      colors: {
		primary : '#1c1C22',
		accent :{
			DEFAULT: '#00ff99',
			hover : '#00e187',
		},
	  },
    }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
