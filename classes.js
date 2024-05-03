// Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para o herói atacar
    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "atacou";
                break;
        }
        console.log(`O ${this.tipo} ${ataque}`);
    }
}

// Exemplo de uso
const heroi1 = new Heroi("Gandalf", 200, "mago");
heroi1.atacar(); // Saída: O mago usou magia

const heroi2 = new Heroi("Legolas", 100, "ninja");
heroi2.atacar(); // Saída: O ninja usou shuriken
