const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    platform: 'node',
    outfile: 'dist/index.js',
    loader: {
        '.html': 'file',
    },
    external: ['mock-aws-s3', 'aws-sdk', 'nock'],
}).catch(() => process.exit(1));
