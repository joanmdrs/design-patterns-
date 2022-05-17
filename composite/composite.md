# Composite

## Intenção oficial

Compor objetos em estruturas de árvore para representar hierarquias partes/todo. Composite permite aos clientes tratarem de maneira uniforme objetos individuais e composições de objetos.

## Sobre o composite

- é um padrão da categoria estrutural (structural)
- Faz mais sentido em estruturas que podem ser tratadas hierarquicamente (como árvores)
- Pode ser uma solução para estruturas complexas que podem ser tratadas  de maneira uniforme.
- Prioriza composição ao invés de herança
- Exemplo: produto solto com preço e caixa com vários do mesmo produtos tambem com preço.
- no composite, nós internos (que têm filhos) são objetos "Composite", eles delegam funções para seus filhos. 
- nós externos (que não têm filhos) são objetos (leaf), são esses que trabalham.

## Aplicabilidades

### Use o padrão composite quando:

- sua estrutura de objetos possa ser representada hierarquicamente , como por exemplo, estruturas do tipo árvore.
- você quiser que o código cliente trate objetos compostos e objetos simples da mesma maneira. 

## Consequências

### Bom

- é muito fáciç criar objetos complexos por composição
- é fácil gerar uma hierarquia de objetos
- é fácil usar polimorfismo e recursão
- é fácil adicionar novos tipos de elementos na estrutura (OCP)

### Ruim 

- Dependendo da estrutura, pode quebrar o princípio da  segregação de interface (ISP). Objetos do tipo "Leaf" (folha) tendem a ter métodos que não usam ou não fazem nada. 

### [Estrutura](https://github.com/joanmdrs/design-patterns-/edit/main/composite/composite.png)









