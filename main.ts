//console.log("uma frase");
// let numero:number = 10;
// let text: string = "texto";
// let logica: boolean = false;
// let nula: null = null;
// let arr: Array<number> = [1,2,3];
// let arr1: Array<any> = new Array ("1","2","3");

// arr.push(2);

// let valor: number = 10;
// let valortxt: string = valor.toFixed(2);

// let letras: string = "      frase aleatoria    ";
// console.log(letras);
// let frase: string = letras.trim();
// console.log(frase);
// let texto: string = "texto alea"
// let str: new String();
// console.log(texto.charAt(4));

// let str: string = "lalala";
// let text: string = "lelele";
// console.log(str.concat(text));

// let text2: string | number = "retorna a posição";
// console.log(text2.indexOf("R"));

// let str1: string = "ultima posicao";
// console.log(str1.lastIndexOf("a"));

//let arry: Array<string> = ["um", "dois", "tres", "quatro", "cinco"];
// console.log(arry.push());
// console.log(arry.pop());
// console.log(arry.shift());
// console.log(arry.unshift());
// let arry2: Array<string> = new Array ("6");
// console.log(arry.concat(arry2));
// console.log(arry.join());
//console.log(arry.slice())

// let arry: Array<string> = ["gato", "cachorro", "papagaio", "golfinho"];
// console.log(arry.splice(1));
// console.log(arry.indexOf("gato"));
// console.log(arry.lastIndexOf("golfinho"));

// let arry: Array<number> = [1,2,3,4,5];
// arry.forEach(function (value){
//     console.log(value);
// });

// enum Jogadores{
//     bom,
//     ruim,
//     mediano,
//     jogador_de_lol,
// }


//exemplo de função sem retorno e sem parametros
// function fun01(): void{
//     console.log("primeira função")
// }
// fun01();
//exemplo com parametro e sem retorno
// function fun02(nome: string): void {
//     console.log("boa tarde " + nome);
// }
// fun02("claudia");
//exemplo sem parametro e com retorno
// function fun03(): number | undefined{
//     return 10;
// }
// let valor= fun03();
// console.log(valor);
//exemplo com parametro e com retorno
// function fun04(num1: number,num2: number): number{
//     return num1 + num2;
// }
// console.log(fun04(1,5));


// function saudacao(texto: string):void {
//     console.log("Olá,mundo!")
// }
// saudacao("olá, mundo");

// function dobro(num1: number): number{
//     return num1*2;
// }
// console.log(dobro(1));

// function mostrarNumeros(inicio: number, fim: number): void{
//     for(let i= inicio; i<= fim; i++){
//     console.log(i)
//     }
// }
// mostrarNumeros(10,20);

// function verificarPar(entrada: number): void{
//     if(entrada % 2==0){
//     console.log("é par")}
//     else{
//     console.log("não é par");
// }
// }
// verificarPar(11);

// class Pessoa {
//     nome: string
//     idade: number
//     email: string

//     constructor (nome: string, idade: number, email: string ){
//         this.nome = nome;
//         this.idade = idade;
//         this.email = email;
//     }

// }

// class Aluno extends Pessoa{
//     matricula: number
//     constructor (nome: string, idade: number, email: string, matricula: number){
//         super(nome, idade, email)
//         this.matricula = matricula;
//     }
// }

// class Retangulo {
//     largura: number;
//   altura: number;

//     constructor (largura: number, altura: number){
//         this.largura = largura;
//         this.altura = altura;
//     }
//     Area(): void {
//         this.largura * this.altura;
//     }
//     perimetro(): void {
//         this.largura + this.largura + this.altura + this.altura;
//     }
// }
// const retangulo = new Retangulo(10, 20)

// class Circulo {
//     raio: number;

//     constructor (raio: number){
//     this.raio = raio;
//     }
//     calcularRaio(): any {
//         Math.PI * this.raio * this.raio
//     }
//     circunferencia(): any {
//         2 * Math.PI * this.raio
//     }
// }  

class ContaBancaria {
    saldo: number;
    numeroConta: number;

    constructor (numeroConta: number){
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }
    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }
    verificarSaldo(): void{
        console.log("seu saldo atual é: " + this.saldo);    
    }
}
const conta = new ContaBancaria(10);
conta.verificarSaldo();
conta.depositar(20);
conta.verificarSaldo();
conta.sacar(15);
conta.verificarSaldo();

console.log(conta.numeroConta);

class Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor (nome: string, preco: number, quantidade: number){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    calcularPreco(valor: number){
        this.preco * this.quantidade;
    }
}

class Triangulo {
    lado1: number;
    lado2: number;
    lado3: number;

    constructor (lado1: number, lado2: number, lado3: number){
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    verificar (): string {
        let check1: boolean = (this.lado2 - this.lado3) < this.lado1 && this.lado1 <(this.lado2 + this.lado3);
        let check2: boolean = (this.lado1 - this.lado3) < this.lado2 && this.lado2 <(this.lado1 + this.lado3);
        let check3: boolean = (this.lado1 - this.lado2) < this.lado3 && this.lado3 <(this.lado1 + this.lado2);
    

        if (check1 && check2 && check3) {
            return "é um triângulo"
        }
        return "não é um triângulo"        
    }
}
const triangulo= new Triangulo(10,10,10);
console.log(triangulo.verificar());