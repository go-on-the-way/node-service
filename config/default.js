'use strict';

module.exports = {
    mongodb:{
		dbname:'wlei',
        url:'mongodb://localhost:27017/'
    },
	session: {
		name: 'SID',
		secret: 'SID',
		cookie: {
			httpOnly: true,
            secure:   false,
            maxAge:   365 * 24 * 60 * 60 * 1000,
		}
	}
}