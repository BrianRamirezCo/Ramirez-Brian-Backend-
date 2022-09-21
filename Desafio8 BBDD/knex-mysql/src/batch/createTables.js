import knex from 'knex';
import { config } from '../utils/config.js';

const knexCli = knex(config.db);

knexCli.schema.dropTableIfExists('productos')
    .then(()=>{
        knexCli.schema.createTable('productos', table =>{
    table.increments('id').primary();
    table.string('producto', 50).notNullable();
    table.string('descripcion', 50).notNullable();
    table.integer('precio').notNullable();
    table.integer('stock').notNullable();
    })
        .then(()=> console.log('table created'))
        .catch(err=> {
        console.log(err)
        throw err;
    })
    .finally(()=>{
        knexCli.destroy();
    })
})


