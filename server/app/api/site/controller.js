'use strict';

const Site = require('../../models/site');
const AppError = require('../../libs/errors');

const SiteController = {
	get: (req, res, next) => {
		Site.findOne((err, site) => {
			if (err) {
				return next(err);
			}
			if (!site) {
				return next(AppError.internalServer());
			} else {
				res.json(site);
			}
		});
	},
	update: (req, res, next) => {
		const opts = { runValidators: true };
		Site.findOneAndUpdate({}, { $set: req.body }, opts, (err, site) => {
			if (err) {
				return next(AppError.badRequest(err.message));
			}
			if (!site) {
				return next(AppError.internalServer());
			} else {
				res.json(site);
			}
		});
	}
};

module.exports = SiteController;