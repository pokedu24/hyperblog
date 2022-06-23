var a = 10;
var b = 10;

function sumar()
{
    let resultado = this.a + this.b;
    console.log('El resultado de la suma entre ' + this.a + ' + ' + this.b + ' es: ' + resultado);
    alert(resultado);
}

sumar();