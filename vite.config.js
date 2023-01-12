import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
// I've gone back and forth on this, but if you want to proxy your API requests
// you can add / edit this this line for your server to abstract the API calls.
//  server: {
//   proxy: {
//     "/api":  "http://localhost:5000",
//     },
//   },
})
