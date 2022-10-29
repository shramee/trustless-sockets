export default (config, env, helpers) => {
	if (process.env.NODE_ENV === 'production') {
		config.output.publicPath = 'https://shramee.github.io/trustless-sockets/';
	}
};