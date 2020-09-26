## Exercício 2 Javascript
Você deverá:
Atualizar seu repositório com os arquivos da aula de javascript
Entrar na pasta aulas-javascript > exercicios > aula2
Dentro da pasta aula2, criar um arquivo html. Nele deve conter:
- Um formulário com dois inputs de type number
- Para cada input, uma label ("Número 1" e "Número 2", respectivamente)
- Dois botões com type button, sendo um com o valor "Checar se são diferentes" e o outro "Resetar"
Na mesma pasta, criar um arquivo javascript e adicioná-lo ao seu arquivo html
No arquivo javascript, realizar o seguinte:
- Criar uma função chamada saoDiferentes()
- Dentro dessa função, pegar o valor inserido no primeiro input e o valor do segundo input 
- Se os valores forem diferentes um do outro, criar um novo elemento div com o texto "Os valores são diferentes"
- Em seguida, alterar a cor desse texto para verde (mudando o style ou adicionando uma classe css)
- Depois, inserir o elemento no documento depois do formulário
- Se não forem diferentes, criar o mesmo elemento com o texto "Não são diferentes"
- Alterar a cor do texto para vermelho
- Inserir o elemento após o formulário
- Criar uma função chamada resetar()
- Dentro dessa função, limpar os valores dos inputs e remover do documento o elemento criado anteriormente
- Ao clicar no botão "Checar se são diferentes", executar a função saoDiferentes()
- Ao clicar no botão "Resetar", executar a função resetar()