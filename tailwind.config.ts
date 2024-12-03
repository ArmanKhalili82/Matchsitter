import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '0rem',
      screens: {
        '2xl': '1856px',
      },
    },
    extend: {
      width: {
        '68': '17rem',
      },
      height: {
        '68': '17rem',
      },
      padding: {
        '68': '17rem',
      },
      margin: {
        '68': '17rem',
      },
      translate: {
        '68': '17rem',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #B9F2E2 0%, #4EDBB300 100%)',
        'define-gradient': 'linear-gradient(90deg, #C2E8F1 0%, #C0EBF2 100%)',
        'subscription-gradient': 'linear-gradient(180deg, #F8D31B 0%, #F8AA1B 100%)',
      },
      colors: {
        // border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          50: 'hsl(var(--primary50))',
          75: 'hsl(var(--primary75))',
          100: 'hsl(var(--primary100))',
          200: 'hsl(var(--primary200))',
          300: 'hsl(var(--primary300))',
          400: 'hsl(var(--primary400))',
          500: 'hsl(var(--primary500))',
          600: 'hsl(var(--primary600))',
          700: 'hsl(var(--primary700))',
          800: 'hsl(var(--primary800))',
          900: 'hsl(var(--primary900))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          50: 'hsl(var(--secondary50))',
          100: 'hsl(var(--secondary100))',
          200: 'hsl(var(--secondary200))',
          300: 'hsl(var(--secondary300))',
          400: 'hsl(var(--secondary400))',
          500: 'hsl(var(--secondary500))',
          600: 'hsl(var(--secondary600))',
          700: 'hsl(var(--secondary700))',
          800: 'hsl(var(--secondary800))',
          900: 'hsl(var(--secondary900))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        gray: {
          50: 'hsl(var(--gray50))',
          100: 'hsl(var(--gray100))',
          200: 'hsl(var(--gray200))',
          300: 'hsl(var(--gray300))',
          400: 'hsl(var(--gray400))',
          500: 'hsl(var(--gray500))',
          600: 'hsl(var(--gray600))',
          700: 'hsl(var(--gray700))',
          800: 'hsl(var(--gray800))',
          900: 'hsl(var(--gray900))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          success_dark: 'hsl(var(--success-dark))',
          success_light: 'hsl(var(--success-light))',
        },
        error: {
          DEFAULT: 'hsl(var(--error))',
          success_dark: 'hsl(var(--error-dark))',
          success_light: 'hsl(var(--error-light))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          warning_dark: 'hsl(var(--warning-dark))',
          warning_light: 'hsl(var(--warning-light))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          info_dark: 'hsl(var(--info-dark))',
          info_light: 'hsl(var(--info-light))',
        },

        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        surface: {
          100: 'hsl(var(--surface))',
        },
        icons: {
          500: 'hsl(var(--i-500))',
          600: 'hsl(var(--i-600))',
          700: 'hsl(var(--i-700))',
          800: 'hsl(var(--i-800))',
        },
        border: {
          100: 'hsl(var(--border-100))',
          200: 'hsl(var(--border-200))',
          300: 'hsl(var(--border-300))',
        },
        background: {
          50: 'hsl(var(--background-50))',
          100: 'hsl(var(--background-200))',
          200: 'hsl(var(--background-300))',
          300: 'hsl(var(--background-300))',
          400: 'hsl(var(--background-300))',
        },
        textBody: {
          50: 'hsl(var(--t-body-50))',
          100: 'hsl(var(--t-body-100))',
          200: 'hsl(var(--t-body-200))',
          300: 'hsl(var(--t-body-300))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        32: '32px',
        50: '5px',
        80: '8px',
        100: '10px',
        150: '15px',
        200: '20px',
        250: '25px',
        3600: '360px',
      },
      screens: {
        mb: '640px',
        ds: '1024px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },

      boxShadow: {
        soft: '0 0 25px',
        normal: '0px 4px 25px 0px',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/container-queries'),
    require('./src/lib/typography'),
  ],
} satisfies Config

export default config
