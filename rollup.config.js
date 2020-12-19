import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    },
    external: ['fs/promises'],
    plugins: [typescript()],
};
