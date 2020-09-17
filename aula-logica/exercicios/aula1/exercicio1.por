programa
{
	
	funcao inicio()
	{
		real n1, n2, select, result
		n1=0
		n2=0
		select=0
		result=0
		
			escreva("Escolha a operação:\n"+
				   "1 - Soma;\n"+ 
				   "2 - Subtração;\n"+
				   "3 - Multiplicação;\n"+
				   "4 - Divisão\n")
			leia(select)
			escreva("Informe o primeiro valor")
			leia(n1)
			escreva("Informe o segundo valor")
			leia(n2)

			
			se (select==1)
			{
				escreva(n1+n2)
			}
			senao se(select==2)
			{
				escreva(n1-n2)
			}
			senao se(select==3)
			{
				escreva(n1*n2)
			
			}
			senao se(select==4)
				escreva(n1/n2)
				

		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 309; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */