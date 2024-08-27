for most of these update:

# `vite.config.ts`:

`import path from "path"`


```resolve: {
    alias: {
      '@lib': path.resolve(__dirname, 'src/lib'),
    },
  }```