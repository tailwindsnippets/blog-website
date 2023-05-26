/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      boxShadow: {
        none: "none",
        sm: "0px 1px 2px 0px rgba(13, 16, 45, 0.1)",
        base: "0px 1px 2px -1px rgba(13, 16, 45, 0.1), 0px 2px 4px 0px rgba(13, 16, 45, 0.1)",
        md: "0px 2px 4px -2px rgba(13, 16, 45, 0.1), 0px 4px 6px -1px rgba(13, 16, 45, 0.1)",
        lg: "0px 4px 6px -4px rgba(13, 16, 45, 0.1), 0px 10px 15px -3px rgba(13, 16, 45, 0.1)",
        xl: "0px 8px 10px -6px rgba(13, 16, 45, 0.1), 0px 20px 25px -5px rgba(13, 16, 45, 0.1)",
        "2xl": "0px 25px 50px -12px rgba(13, 16, 45, 0.1), 0px 12px 24px 0px rgba(13, 16, 45, 0.1)",
        "accent-volume":
          "5px 5px 10px rgba(108, 106, 213, 0.25), inset 2px 2px 6px #A78DF0, inset -5px -5px 10px #6336E4",
        "white-volume": "5px 5px 10px rgba(108, 106, 212, 0.25), inset 2px 2px 6px #EEF1F9, inset -5px -5px 10px #DFE3EF"
      },

      animation: {
        shine: 'shine 0.8s ease-in',
        ping: 'ping 3s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
     
      fontFamily: {
        'sans-pro': ['"Source Sans Pro", sans-serif'],
    },
    },
    colors:{
      brown:{
        '700':'#ffcda3',
        '600':'#FCE2CE',
        '500':'#ffede5',
        '400':'#fff5ef'
      },
      white:'#ffffff',
      primary:'#46BCF2',
      success:'#16C79A',
      danger:'#ef4f4f',
      warning:'#F6C065',
      information: '#008891',
      black:{
        '900':'#000000',
        '700':'#101010',
        '400':'#222831',
              },
      gray:{
        '900':'#101010',
        '800':'#bdbdbd',
        '700':'#484848',
        '600':'#212121',
        '500':'#E5E5E5',
        '400':'#9a9a9a',
        '300':'#f3f3f3',
        '200':'#3a3a3a',
        '100':'#999999'
      }
      
    }
  /**
    screens: {
      xs: "540px",
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
  },
    container: {
      center: true,
      padding: {
          DEFAULT: '12px',
          sm: '1rem',
          lg: '45px',
          xl: '5rem',
          '2xl': '13rem',
      },

  },
  boxShadow: {
    sm: '0 2px 4px 0 rgb(60 72 88 / 0.15)',
    DEFAULT: '0 0 3px rgb(60 72 88 / 0.15)',
    md: '0 5px 13px rgb(60 72 88 / 0.20)',
    lg: '0 10px 25px -3px rgb(60 72 88 / 0.15)',
    xl: '0 20px 25px -5px rgb(60 72 88 / 0.1), 0 8px 10px -6px rgb(60 72 88 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(60 72 88 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(60 72 88 / 0.05)',
    testi: '2px 2px 2px -1px rgb(60 72 88 / 0.15)',
}, **/
  },
  
 
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    // ...
  ],
}
