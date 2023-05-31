import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import path from 'path';
import svgr from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react';

const isProduction = process.env.NODE_ENV === 'production';
// 填入项目的 CDN 域名地址
const CDN_URL = 'xxxxxx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UnoCSS(), react(), svgr()],
  resolve: {
    // 别名配置
    alias: {
      '@assets': path.join(__dirname, 'src/assets')
    }
  },
  base: isProduction ? CDN_URL : '/'
});
