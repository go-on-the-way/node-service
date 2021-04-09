'use strict';

module.exports = {
    mongodb:{
        url:'mongodb://localhost:27017/wlei'
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