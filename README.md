# Minimal Rust Wasm Webpack 5 template

## Used
Rust, wasm-pack, yarn 3, webpack 5

Based on https://github.com/ballercat/minimal-webpack5-wasm-demo
and https://github.com/rustwasm/wasm-pack

## Build and run
```
wasm-pack build -t bundler
yarn
yarn webpack serve
```

Navigate to `localhost:9000`, you should see two alerts from wasm module and logs in dev console

