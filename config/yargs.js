const argv = require("yargs")
	.options("b", {
		alias: "base",
		type: "number",
		describe: "Es la base de la tabla de multiplicar",
		demandOption: true,
	})
	.check((argv, options) => {
		if (isNaN(argv.b)) {
			throw "La base debe ser un numero";
		}
		return true;
	})
	.options("h", {
		alias: "hasta",
		type: "number",
		describe: "Es el limite del tamaño de la tabla de multiplicar",
		demandOption: true,
	})
	.check((argv, options) => {
		if (isNaN(argv.h)) {
			throw "El limite debe ser un numero";
		}
		return true;
	})
	.option("l", {
		alias: "list",
		type: "boolean",
		describe: "Muestra la tabla en consola",
		default: false,
	}).argv;

module.exports = argv;
