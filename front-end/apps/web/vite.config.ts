// import { fileURLToPath, URL } from "node:url";
import path from "path";
import { defineConfig, loadEnv, type ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";


// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  // 获取环境变量
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        // 设置路径
        '~': path.resolve(__dirname, './'),
        // 设置别名
        '@': path.resolve(__dirname, './src')
      },
      // https://cn.vitejs.dev/config/#resolve-extensions
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    server: {
      port: 3001,
      hmr: true,
      cors: true,
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, '/api'),
          // 如下代码为什么没生效
          // bypass: (req, res, options: any) => {
          //   console.log('bypass', req, res, options)
          //   const proxyUrl = new URL( options.rewrite(req.url) || '', (options.target) as string)?.href || ''
          //   console.log('proxyUrl', proxyUrl)
          //   req.headers['x-res-proxyUrl'] = proxyUrl
          //   res.setHeader('x-res-proxyUrl', proxyUrl)
          // }
        }
      }
    }
  });
};

