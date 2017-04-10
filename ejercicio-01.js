function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    if(typeof creditCardNumber == "undefined"){
    return "Ingresa un numero";
	}else if(typeof creditCardNumber !== "number") {
		return("Error de dato");
	}if(creditCardNumber.length != 16){
		return 'Faltan numeros';
	} else if(creditCardNumber.length != 16){
		return 'Faltan numeros';
	}
	function validacion(creditCardNumber){
		if ( creditCardNumber%10===0){
			return true;
		}else{
			return false;
		}
	}
	for(i = 0; i <= creditCardNumber.length; i++){
		var numerosPares = [];
		var numerosImpares = [];
		var separar = creditCardNumber.split("");
	}
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
