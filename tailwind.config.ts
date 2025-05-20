
import type { Config } from "tailwindcss";


export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for House of Auteur
				noir: {
					DEFAULT: '#0A0A0A',
					light: '#111111',
					accent: '#222222'
				},
				violet: {
					DEFAULT: '#6E59A5',
					light: '#8B5CF6',
					dark: '#4c3788',
					glow: '#D6BCFA'
				},
				neon: {
					cyan: '#00FFFF',
					magenta: '#FF00FF'
				}
				
			},
			fontFamily: {
				'major': ['major Disp', 'serif'],
				'space': ['Space Grotesk', 'sans-serif'],
				'major': ['Major Mono Display', 'monospace']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'10%': { transform: 'translate(-5px, 5px)' },
					'20%': { transform: 'translate(-10px, 10px)' },
					'30%': { transform: 'translate(5px, -5px)' },
					'40%': { transform: 'translate(10px, -10px)' },
					'50%': { transform: 'translate(-5px, 5px)' },
					'60%': { transform: 'translate(-10px, 10px)' },
					'70%': { transform: 'translate(5px, -5px)' },
					'80%': { transform: 'translate(10px, -10px)' },
					'90%': { transform: 'translate(-5px, 5px)' }
				},
				'neon-pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				float1: {
				'0%, 100%': { transform: 'translate(0, 0)' },
				'50%': { transform: 'translate(10px, -20px)' },
				},
				float2: {
				'0%, 100%': { transform: 'translate(0, 0)' },
				'50%': { transform: 'translate(-15px, -30px)' },
				},
				float3: {
				'0%, 100%': { transform: 'translate(0, 0)' },
				'50%': { transform: 'translate(0, -40px)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glitch': 'glitch 2s ease-in-out infinite',
				'neon-pulse': 'neon-pulse 4s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
