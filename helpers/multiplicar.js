const fs = require("fs");

const crearArchivo = async (base, list, limite) => {
	try {
		let salida = "";

		for (let i = 1; i <= limite; i++) {
			salida += `${base} x ${i} = ${base * i}\n`;
		}
		if (list) {
			console.log("===========================");
			console.log(`       Tabla del ${base}`);
			console.log("===========================");
			console.log(salida);
		}
		fs.writeFileSync(`./Salidas/tabla-${base}.txt`, salida);

		return `tabla-${base}.txt`;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	crearArchivo,
};
