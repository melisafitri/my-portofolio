import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import obfuscatorPlugin from 'vite-plugin-obfuscator';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      obfuscatorPlugin({
        apply: 'build',
        options: {
          compact: true,
          controlFlowFlattening: false,
          deadCodeInjection: false,
          stringArray: true,
          stringArrayEncoding: ['base64'],
          stringArrayThreshold: 0.5,
          identifierNamesGenerator: 'hexadecimal',
          renameGlobals: false,
          selfDefending: false,
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
