import './assets/style.css'
import 'reflect-metadata'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})

// SQlite
// https://github.com/capacitor-community/sqlite/blob/master/docs/TypeORM-Usage-From-5.6.0.md
import sqliteParams from './databases/sqliteParams';
import simplefitDataSource from './databases/datasources/SimplefitDataSource';
import * as entities from './databases/entities';
const initializeDataSources = async () => {
    //check sqlite connections consistency
    await sqliteParams.connection.checkConnectionsConsistency()
        .catch((e) => {
            console.log(e);
            return {};
        });

    // Loop through the DataSources
    for (const mDataSource of [simplefitDataSource]) {
        // initialize
        await mDataSource.dataSource.initialize();
        if (mDataSource.dataSource.isInitialized) {
            // run the migrations
            await mDataSource.dataSource.runMigrations();
        }
        // if (sqliteParams.platform === 'web') {
        //     await sqliteParams.connection.saveToStore(mDataSource.dbName);
        // }
    }

    
    const repository = simplefitDataSource.dataSource.getRepository(entities.Exercicio)
    const exercicio = new entities.Exercicio()
    exercicio.name = 'Teste'
    repository.save(exercicio)
}

if (sqliteParams.platform !== "web") {
    console.log('Initializing datasource')
    initializeDataSources();
    // Now depending on the Framework render your APP
} else {
    console.log('Running on web, datasource is unavailable')
}

app.use(vuetify)

app.mount('#app')
