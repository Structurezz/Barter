const mysql = require('mysql');

class DatabaseUtility {
    constructor(dbConfig) {
        this.pool = mysql.createPool({
            connectionLimit: dbConfig.connectionLimit || 10,
            host: dbConfig.host || 'localhost',
            user: dbConfig.user || 'root',
            password: dbConfig.password || '',
            database: dbConfig.database || 'my_database',
            timezone: 'utc', // Ensure UTC timezone for consistency
            multipleStatements: true // Allow executing multiple SQL statements
        });
    }

    async query(sql, params) {
        return new Promise((resolve, reject) => {
            this.pool.query(sql, params, (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    async insert(table, data) {
        const sql = `INSERT INTO ${table} SET ?`;
        return this.query(sql, data);
    }

    async update(table, data, conditions) {
        const sql = `UPDATE ${table} SET ? WHERE ?`;
        return this.query(sql, [data, conditions]);
    }

    async delete(table, conditions) {
        const sql = `DELETE FROM ${table} WHERE ?`;
        return this.query(sql, conditions);
    }

    async findOne(table, conditions) {
        const sql = `SELECT * FROM ${table} WHERE ? LIMIT 1`;
        const result = await this.query(sql, conditions);
        return result[0];
    }

    async findAll(table, conditions = {}) {
        const sql = `SELECT * FROM ${table}`;
        if (Object.keys(conditions).length > 0) {
            sql += ' WHERE ?';
        }
        return this.query(sql, conditions);
    }

    // Add more database utility methods as needed
}

module.exports = DatabaseUtility;
