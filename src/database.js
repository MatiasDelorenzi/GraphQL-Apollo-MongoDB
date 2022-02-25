const { connect } = require('mongoose');

const databaseConnection = async () => {
    try {
        await connect('mongodb://localhost/taskdbgraphql');
        console.log('Successfully connected to Database')
    } catch (error) {
        console.error(`Database connection failed with the following error: ${error}`)
    }
}

module.exports = databaseConnection;