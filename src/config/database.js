import sqlite3 from 'sqlite3'

const SQLite3 = sqlite3.verbose();

function query(command, params, method = 'all'){
    return new Promise((resolve, reject)=>{
        db[method](command, params, (error, result)=>{
            if(error)
                reject(error)
            else
                resolve(result);
        });
    });
}

const db = new SQLite3.Database('banco.db', sqlite3.OPEN_READWRITE, (err)=>{
    if(err)
        return console.log('Erro ao conectar ao banco ' + err.message)
});

export {db, query};