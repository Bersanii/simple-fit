# simple-fit

https://github.com/capacitor-community/sqlite/issues/149#issuecomment-884326531
https://vitejs.dev/config/shared-options.html#esbuild

para os migrations do typeorm funcionarem a tag 

esbuild: {
    minifyIdentifiers: false
}

precisa estar habilitada, se não o esBuild vai minificar o nome da classe e o typeorm precisa que o nome da classe tenha o timestamp