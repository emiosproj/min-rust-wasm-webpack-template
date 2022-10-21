import { greet } from 'myrustlib';

console.log('Sync Wasm Module');
greet();

import('myrustlib').then(({ greet }) => {
    console.log('Async Wasm Module');
    greet();
});
