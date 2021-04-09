'use strict';

import questionRoute from './questionRoute'

export default app => {
	app.use('/question', questionRoute);
}