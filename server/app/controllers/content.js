'use strict';

const Content = require('../models/content');

const ContentController = {
	get: (req, res) => {
		Content.get()
			.then(data => res.json(data))
			.catch(err => res.status(500).end(String(err)));
	},
	insert: (req, res) => {
		Content.insert(req.body)
			.then(data => res.json(data))
			.catch(err => res.status(500).end(String(err)));
	},
	// update: (req, res) => {
	// 	Content.update(req.body)
	// 		.then(data => res.json(data))
	// 		.catch(err => res.status(500).end(String(err)));
	// }
};

module.exports = ContentController;