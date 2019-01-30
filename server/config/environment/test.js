/*eslint no-process-env:0*/

// Test specific configuration
// ===========================
module.exports = {
    // MongoDB connection options
    mongo: {
        useMongoClient: true,
        uri: 'mongodb://<aashaytiwari1994@gmail.com>:<Hartmann@123#>@ds161255.mlab.com:61255/angulararticle_aashay'
    },
    sequelize: {
        uri: 'sqlite://',
        options: {
            logging: false,
            operatorsAliases: false,
            storage: 'test.sqlite',
            define: {
                timestamps: false
            }
        }
    },
    port: '9001',
};
