exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://dax:password@ds115352.mlab.com:15352/blogapi';
exports.PORT = process.env.PORT || 8080;