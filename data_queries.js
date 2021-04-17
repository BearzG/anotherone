const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Elmercanelo123',
    database: 'store'
});

let result = [];

function query_table() {
    con.query('SELECT * FROM products', (err, res) => {
        console.log('Looking for a result...');
        if (err) throw err;
        console.log(res); // res => A list with Object as its elements with each row
        // for (let elm in res) {
        //     console.log(res[elm].Product);
        // }
        for (elm in res) {
            result.push(res[elm])
        }
    });
    return result;
}


async function mysql_connection() {
    await con.connect();
    console.log('Succesfully Connected to MySQL');
}




mysql_connection()
.then(() => {
    query_table();
});

const last_return = () => {
    return result;
}

console.log('Creating Connection...');

module.exports = last_return;