'use strict';

import questionRoute from './questionRoute'
import reptileRoute from './reptileRoute'

export default app => {
	app.use('/question', questionRoute);
	app.use('/reptile', reptileRoute);
}