class aventuraHeroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }

        atacar(){
            console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
        }
        
}

let ataqueDoHeroi = new aventuraHeroi("WolfMan", "55", "Guerreiro", "Espada")

ataqueDoHeroi.atacar()

