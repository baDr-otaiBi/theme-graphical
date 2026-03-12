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
        // Override default colors completely for dark luxury theme
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            // Map "white" to dark card background
            white: '#1A1A1A',
            // Map "black" to light text
            black: '#F5F5F5',
            // Dark variants
            dark: '#0D0D0D',
            darker: '#0A0A0A',
            danger: '#AE0A0A',
            // Primary = Gold
            primary: {
                DEFAULT: 'var(--color-primary)',
                dark: 'var(--color-primary-d)',
                light: 'var(--color-primary-l)',
                reverse: 'var(--color-primary-reverse)',
            },
            // Gray scale — mapped to dark luxury shades
            gray: {
                50:  '#1A1A1A',
                100: '#1A1A1A',
                200: '#222222',
                300: '#2A2A2A',
                400: '#707070',
                500: '#707070',
                600: '#B0B0B0',
                700: '#B0B0B0',
                800: '#E0E0E0',
                900: '#F5F5F5',
            },
            // Red (for errors/danger)
            red: {
                50:  'rgba(239,68,68,0.05)',
                100: 'rgba(239,68,68,0.1)',
                200: 'rgba(239,68,68,0.2)',
                300: '#fc8181',
                400: '#f56565',
                500: '#ef4444',
                600: '#e53e3e',
                700: '#c53030',
                800: '#9b2c2c',
                900: '#742a2a',
            },
            // Green (for success)
            green: {
                50:  'rgba(72,187,120,0.05)',
                100: 'rgba(72,187,120,0.1)',
                200: 'rgba(72,187,120,0.2)',
                300: '#68d391',
                400: '#48bb78',
                500: '#38a169',
                600: '#2f855a',
                700: '#276749',
                800: '#22543d',
                900: '#1c4532',
            },
            // Yellow/Amber (gold accents)
            yellow: {
                50:  'rgba(201,168,76,0.05)',
                100: 'rgba(201,168,76,0.1)',
                200: 'rgba(201,168,76,0.2)',
                300: '#E2C670',
                400: '#C9A84C',
                500: '#C9A84C',
                600: '#A8863A',
                700: '#8B6E2F',
                800: '#6E5724',
                900: '#523F1A',
            },
            // Blue
            blue: {
                50:  'rgba(66,153,225,0.05)',
                100: 'rgba(66,153,225,0.1)',
                200: 'rgba(66,153,225,0.2)',
                300: '#63b3ed',
                400: '#4299e1',
                500: '#3182ce',
                600: '#2b6cb0',
                700: '#2c5282',
                800: '#2a4365',
                900: '#1a365d',
            },
            // Border color override
            'border-color': 'rgba(255,255,255,0.06)',
        },
        extend    : {
            transitionTimingFunction: {
              'elastic': 'cubic-bezier(0.55, 0, 0.1, 1)',
            },
            gridTemplateColumns: {
                'auto-fill'  : 'repeat(auto-fill, 290px)',
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
            // Border color
            borderColor: {
                DEFAULT: 'rgba(255,255,255,0.06)',
                'gray-200': 'rgba(255,255,255,0.06)',
                'gray-100': 'rgba(255,255,255,0.04)',
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
