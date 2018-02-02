module.exports = {
    PORT: process.env.PORT || 8080,
    CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:800',
    DATABASE_URL:
        process.env.DATABASE_URL || 'mongodb://jc:king@ds223738.mlab.com:23738/cheeses',
    // TEST_DATABASE_URL:
    //     process.env.TEST_DATABASE_URL ||
    //     'mongodb://localhost/thinkful-backend-test'
    // DATABASE_URL:
    //     process.env.DATABASE_URL || 'postgres://localhost/thinkful-backend',
    // TEST_DATABASE_URL:
    //     process.env.TEST_DATABASE_URL ||
    //     'postgres://localhost/thinkful-backend-test'
};
