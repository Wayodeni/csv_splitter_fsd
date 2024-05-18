import { simplifyDefaultsPlugin, simplifyUtilitiesPreset } from "simplify-dev/utils";
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/simplify-dev/**/*.{js,ts}" // styling simplify-dev components 
  ],
  theme: {
    extend: {
        // your configuration
    },
  },
  plugins: [simplifyDefaultsPlugin],
  presets: [simplifyUtilitiesPreset]
} satisfies Config

