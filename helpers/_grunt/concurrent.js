module.exports = {
    syncing: {
        tasks: [
            'sync'
        ],
        options: {
            logConcurrentOutput: true
        }
    },
    build: {
        tasks: [
			'jshint',
            'htmlhint',
            'htmlmin'
        ],
        options: {
            logConcurrentOutput: true,
            limit: 5
        }
	}
};