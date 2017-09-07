'use strict';

const Content = require('../models/content');

const ContentController = {
	get: (req, res) => {
		Content.get()
			.then(list => {
				res.setHeader('x-total-count', list.length);
				return res.json(list);
			})
			.catch(err => res.status(500).end(String(err)));
	},
	getById: (req, res) => {
		Content.getById(req.params.id)
			.then(data => res.json(data))
			.catch(err => res.status(500).end(String(err)));
	},
	insert: (req, res) => {
		Content.insert(req.body)
			.then(data => res.json(data))
			.catch(err => res.status(500).end(String(err)));
	},
	update: (req, res) => {
		let id = req.params.id;
		let updates = req.body;
		delete updates.id;
		delete updates._id;

		Content.update(id, updates)
			.then(data => res.json(data))
			.catch(err => res.status(500).end(String(err)));
	},
	delete: (req, res) => {
		Content.delete(req.params.id)
			.then(data => res.json(data))
			.catch(err => res.status(500).end(String(err)));
	}
};

module.exports = ContentController;