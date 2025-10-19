import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "https://doctor-backend-ufgn.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: true,
        cookieDomainRewrite: {
          "*": "localhost",
        },
        cookiePathRewrite: {
          "*": "/",
        },
        configure: (proxy, _options) => {
          proxy.on("proxyReq", (proxyReq, req, _res) => {
            console.log("→ Sending to backend:", req.method, req.url);
            console.log("→ Cookie header:", req.headers.cookie);
          });
          proxy.on("proxyRes", (proxyRes, req, _res) => {
            console.log(
              "← Response from backend:",
              proxyRes.statusCode,
              req.url
            );
            console.log("← Set-Cookie header:", proxyRes.headers["set-cookie"]);
          });
        },
      },
    },
  },
});
