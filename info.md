
* controlled = Manter em tempo real a informação da variável dentro de um estado no nosso componente
    -famosa estrutura de colocar onChange e guardar no estado
    -Lado ruim: a cada mudança do estado o react renderiza tudo novamente e as vezes pode ser um problema para aplicações

* uncontrolled = Buscamos a informação do valor do input somente quando precisarmos dela, Ou seja não monitoramos os valores em tempo real
    -Ou seja eu pegaria a informação apenas no submit, assim como fazemos no HTML e JavaScript puro
    -O que perco? A fluidez, de tipo o valor ta vazio desabilito, digitou, habilito e etc, mas eu ganho em performance