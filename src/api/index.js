import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/facets', facets({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/env/:var', (req, res) => {
    let envVar = req.params.var;
    let key = process.env[envVar];
    console.log(process.env)
		res.json({ name: envVar, theKey: key });
	});

	return api;
}
