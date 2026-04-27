import { defineConfig } from 'vite'; 
import react from '@vitejs/plugin-react'; 
import { resolve } from 'path';

// 暂时禁用混淆插件，测试是否能找到关键变量和函数
export default defineConfig({ 
  plugins: [ 
    react(), 
  ], 
  build: { 
    minify: 'terser', 
    terserOptions: { 
      mangle: { 
        // 关键配置：防止压缩工具重命名这些变量 
        reserved: [ 
          '_SIGNATURE_RAW', 
          '_VERSION_YEAR', 
          '_EXPECTED_KEY', 
          'checkSystemIntegrity',
          'Identity'
        ], 
      }, 
      compress: { 
        drop_console: false, 
      }, 
      format: { 
        ascii_only: true, // 核心修改：强制所有非 ASCII 字符保留为 Unicode 转义，彻底免疫云端服务器的中文编码干扰 
        comments: /@license|@preserve|Copyright|作者|刘明昊/i, 
      }, 
    }, 
    rollupOptions: { 
      input: { 
        main: resolve(__dirname, 'index.html'), 
        game: resolve(__dirname, 'game.html') 
      } 
    } 
  }, 
});