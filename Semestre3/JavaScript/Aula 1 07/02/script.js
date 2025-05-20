const pessoas = [
    { nome: "Maria", idade: 30, profissao: "Engenheira" },
    { nome: "João", idade: 21, profissao: "Designer" },
    { nome: "juca", idade: 22, profissao: "CEO de MEI" },
    { nome: "Melancia", idade: 43, profissao: "Dev Junior" },
    { nome: "Olivia", idade: 24, profissao: "Dev fullstack overflow" },
    { nome: "Ana", idade: 35, profissao: "Professor" }
];

let root = document.getElementById('root')

let pessoasVelhas = pessoas.filter(function(pessoa){
    return pessoa.idade >= 30
})

pessoasVelhas.forEach(function(pessoa){

    const p = document.createElement("p");
    p.textContent = `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}`;
    p.setAttribute(`class`, `campo${pessoas.indexOf(pessoa)}`)
    root.appendChild(p);

})

console.log(pessoasVelhas)

/*pessoas.forEach(function(pessoa){
    //console.log(pessoa.nome)
    //console.log(pessoa.idade)
    //console.log(pessoa.profissao)
    const p = document.createElement("p");
    p.textContent = `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}`;
    p.setAttribute(`class`, `campo${pessoas.indexOf(pessoa)}`)
    root.appendChild(p);
})



/*for(i=0; i<pessoas.length; i++){
    const p = document.createElement("p");
    p.textContent = `Nome: ${pessoas[i].nome}, Idade: ${pessoas[i].idade}, Profissão: ${pessoas[i].profissao}`;
    p.setAttribute(`class`, `campo${i}`)
    root.appendChild(p);
};*/