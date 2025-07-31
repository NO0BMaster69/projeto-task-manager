import { type Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: '#3977F5',
                secondary: '#566075',
                background: '#F3F4F6',
                text: '#1F2937',
                success: '#10B981',
                danger: '#EF4444',
                gold: '#F5BB38',
            },
            fontSize: {
                heading1: ['30px', { lineHeight: '1.2', fontWeight: '700' }],  // text-3xl, bold
                heading2: ['24px', { lineHeight: '1.3', fontWeight: '700' }],  // text-2xl, bold
                subtitle: ['20px', { lineHeight: '1.4', fontWeight: '600' }],  // text-xl, semibold
                base: ['16px', { lineHeight: '1.5', fontWeight: '400' }],      // text-base, normal
                button: ['16px', { lineHeight: '1.4', fontWeight: '500' }],    // text-base, medium
                menu: ['14px', { lineHeight: '1.4', fontWeight: '600' }],      // text-sm, semibold
            },
        },
    },
    plugins: [
       typography
    ],
}
export default config
