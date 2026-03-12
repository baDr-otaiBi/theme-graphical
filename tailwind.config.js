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
                'dark'         : '#0D0D0D',
                'darker'       : '#0A0A0A',
                'danger'       : '#AE0A0A',
                'primary-dark' : 'var(--color-primary-dark)',
                'white'        : 'transparent',
                'gray'         : {
                  50:  'transparent',
                  100: 'transparent',
                  200: 'transparent',
                  300: 'transparent',
                  400: 'rgba(255,255,255,0.4)',
                  500: 'rgba(255,255,255,0.4)',
                  600: 'rgba(255,255,255,0.6)',
                  700: 'rgba(255,255,255,0.6)',
                  800: '#F5F5F5',
                  900: '#F5F5F5',
                },
            },
            borderColor        : {
                DEFAULT: 'rgba(255,255,255,0.06)',
                'gray'  : {
                  100: 'rgba(255,255,255,0.06)',
                  200: 'rgba(255,255,255,0.06)',
                  300: 'rgba(255,255,255,0.08)',
                },
            },
            backgroundColor    : {
                'white': 'transparent',
            },
            textColor          : {
                'white': '#F5F5F5',
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
                'large': '0',
                'big'  : '0',
                'tiny' : '0',
                DEFAULT: '0',
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
                'default' : 'none',
                'top'     : 'none',
                'md'      : 'none',
                'dropdown': '0 8px 32px rgba(0, 0, 0, 0.5)',
                'light'   : 'none',
                'huge'    : 'none',
                'progress': 'none',
                'mobile'  : 'none',
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
