import { execSync } from 'child_process'

try {
	execSync('rm www/*.js')
} catch (e) {
	
}

export default [
	{
		input: ['src/shell.js', 'src/views/home.js', 'src/views/about.js',
						'src/views/info.js', 'src/views/media.js', 'src/views/games.js',
						'src/views/guide.js', 'src/views/swap.js'
					 ],
		output: {
			dir: 'www',
			format: 'es',
			sourcemap: false
		}
	}, {
		input: ['src/game/shell.js', 'src/game/views/home.js'],
		output: {
			dir: 'www/game',
			format: 'es',
			sourcemap: false
		}
	}
];
