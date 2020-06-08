module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true,
		"jquery": true,
		"mocha": true
	},
		"settings": {
			"react": {
				"version": "latest"
			}
		},
	"extends": ["eslint:recommended",'plugin:react/recommended'],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly",
		"React": "writable"
	},
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true,
			"modules": true
	}
	},
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"react/react-in-jsx-scope": "off"
	}
};