module.exports = {
    important: true,
    content: [
        "src/views/**/*.twig",
        "src/assets/js/**/*.js",
        'node_modules/@salla.sa/twilight-tailwind-theme/safe-list-css.txt',
    ],
    darkMode: 'class',
    theme   : {
        container : {
            center : true,
            padding: '10px',
            screens: {
                '2xl': "1280px"
            }
        },
        fontFamily: {
            sans: [
                'var(--font-main)',
                '-apple-system',
                'BlinkMacSystemFont',
            ],
            primary: "var(--font-main)"
        },
        extend    : {
            transitionTimingFunction: {
              'elastic': 'cubic-bezier(0.55, 0, 0.1, 1)',
            },
            gridTemplateColumns: {
                'auto-fill'  : 'repeat(auto-fill, 290px)',
            },
            colors             : {
                'dark'         : '#1D1F1F',
                'darker'       : '#0E0F0F',
                'danger'       : '#AE0A0A',
                'primary-dark' : 'var(--color-primary-dark)'
            },
            spacing: {
              '3.75': '15px',
              '7.5' : '30px',
              '58'  : '232px',
              '62'  : '248px',
              '100' : '28rem',
              '116' : '464px',
              '132' : '528px',
              '200' : '800px',
            },
            borderRadius       : {
                'large': '22px',
                'big'  : '40px',
                'tiny' : '3px',
                DEFAULT: '2px',
            },
            fontSize           : {
                'icon-lg'   : '33px',
                'xxs'       : '10px',
                'xxxs'      : '8px',
                'title-size': '42px',
                '22px'      : '22px',
            },
            lineHeight         : {
                '12': '3rem',
                '14': '3.5rem',
                '16': '4rem',
                '18': '4.5rem',
                '20': '5rem',
            },
            boxShadow          : {
                'default' : '0 4px 24px rgba(0, 0, 0, 0.4)',
                'top'     : '0 0 10px rgba(0, 0, 0, 0.3)',
                'md'      : '0 4px 24px rgba(0, 0, 0, 0.3)',
                'dropdown': '0 4px 20px rgba(0, 0, 0, 0.5)',
                'light'   : '0 4px 15px rgba(0, 0, 0, 0.2)',
                'huge'    : '0 3px 10px rgba(0, 0, 0, 0.4)',
                'progress': '0 5px 15px rgba(201, 168, 76, 0.3)',
                'mobile'  : '0 2px 20px rgba(0, 0, 0, 0.4)',
            },
            width              : {
                '18': '4.5rem',
                '22': '5.5rem',
                '74': '18.5rem',
                '76': '19rem',
                '78': '19.5rem',
            },
            height             : {
                'banner'        : '200px',
                'lg-banner'     : '428px',
                'full-banner'   : '600px',
                '500'           : '500px',
                '460'           : '460px',
            },
            minWidth           : {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            maxWidth           : {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            zIndex             : {
                '1': '1',
                '2': '2',
                '-1': '-1',
            },
            screens            : {
                'xxs': {'min': '380px', 'max': '479px'},
                'xs': '480px',
            },
            backgroundOpacity  : {
                '05': '0.05',
            },
            transitionProperty : {
                'height': 'height'
            },
            keyframes: {
                slideUpFromBottom: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0%)', opacity: '1' },
                },
                slideDownFromBottom: {
                    '0%': { transform: 'translateY(0%)', opacity: '1' },
                    '100%': { transform: 'translateY(100%)', opacity: '0' },
                },
            },
            animation: {
                slideUpFromBottom: 'slideUpFromBottom .6s linear',
                slideDownFromBottom: 'slideDownFromBottom .6s linear',
            },
        },
    },
    corePlugins: {
      outline: false,
    },
    plugins: [
      require('@salla.sa/twilight-tailwind-theme'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
    ],
}
