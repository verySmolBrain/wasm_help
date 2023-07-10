# wasm_help

## penguin_app.js

This is compiled with `emcc -lembind -pthread -s MODULARIZE=1 -s EXPORT_ES6=1 --no-entry -o penguin_app.js libs/cat/cats.cpp libs/penguin/penguins.cpp`. `cats.cpp` and `penguins.cpp` looks like this:

```
#include "cats.h"
#include <emscripten/bind.h>

std::string generate_cat_fact() {
    return "Cats like fish!";
}

EMSCRIPTEN_BINDINGS(cat_module) {
    emscripten::function("cat", &generate_cat_fact);
}

#include "penguins.h"
#include <emscripten/bind.h>

std::string generate_penguin_fact() {
    return "Penguins are excellent swimmers!";
}

EMSCRIPTEN_BINDINGS(penguin_module) {
    emscripten::function("penguin", &generate_penguin_fact);
}
```

Afterwards I moved the `.wasm`, `.js` and `.worker.js` files to the utils folder.
