'use strict';

const Model = require('../models/admin');

const Controller = {
	get: (req, res) => {
		Model.get(req.params)
			.then(list => {
				res.setHeader('x-total-count', list.length);
				return res.json(list);
			})
			.catch(err => res.status(500).end(String(err)));
	},
	getById: (req, res) => {
		Model.getById(req.params)
			.then(data => res.json(data))
			.catch(err => res.status(500).end(String(err)));
	},
	insert: (req, res) => {
		Model.insert(req.params.collection, req.body)
			.then(data => res.json(data))
			.catch(err => res.status(500).end(String(err)));
	},
	update: (req, res) => {
		let updates = req.body;
		delete updates.id;
		delete updates._id;

		Model.update(req.params, updates)
			.then(data => res.json(data))
			.catch(err => res.status(500).end(String(err)));
	},
	delete: (req, res) => {
		Model.delete(req.params)
			.then(data => res.json(data))
			.catch(err => res.status(500).end(String(err)));
	}
};

module.exports = Controller;