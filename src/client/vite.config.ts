import swc from 'unplugin-swc';
import type { UserConfig } from 'vite';
import path from 'path';

import { CONFIGS } from '../public/consts';

const root = path.join(process.cwd(), 'src/client');

export default async () => {
    const config: UserConfig = {
        root,
        plugins: [
            swc.vite({
                tsconfigFile: path.join(root, '../tsconfig.client.json'),
                jsc: {
                    target: 'esnext',
                    parser: {
                        syntax: 'typescript',
                        tsx: false,
                        decorators: true,
                        dynamicImport: true,
                    },
                    keepClassNames: true,
                },
            }),
        ],
        server: {
            open: true,
            host: CONFIGS.Host,
            port: CONFIGS.Port + 1,
            proxy: {
                [CONFIGS.Prefix]: {
                    target: `http://${CONFIGS.Host}:${CONFIGS.Port}`,
                    changeOrigin: true,
                },
            },
        },
    };

    return Promise.resolve(config);
};
