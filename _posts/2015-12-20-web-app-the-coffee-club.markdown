---
title: App The Coffee Club
date: 2015-12-20
---

A algum tempo atrás no [CG Hackspace](http://www.cghackspace.org), adquirimos uma excelente máquina de [café expresso](https://www.nespresso.com/br/pt/). Durante o primeiro mês, o controle do consumo das cápsulas era por meio de anotações feito individualmente em post-it, como na imagem abaixo:

<p align="center">
	<img src="https://raw.githubusercontent.com/brenopolanski/coffee-club/assets/post-it.jpg" style="width: 450px;" height="390" />
	<img src="https://raw.githubusercontent.com/brenopolanski/coffee-club/assets/nespresso.gif" style="width: 450px;" />
</p>

Então pensei que isso estava errado e que poderíamos melhorar a forma de controlar o consumo, precisávamos desenvolver uma simples web app mobile para cada membro registrar o seu café.

Eu já estava querendo estudar algumas novas tecnologias, nada melhor que colocar o conhecimento em prática. Então comecei primeiramente criando alguns mockups para a app (eu gosto muito de fazer alguns sketches no papel para depois finalmente usar alguma ferramenta).

[imagens app papel]

No início a aplicação tinha o seguinte fluxo:

1- O usuário fazia login na app usando sua conta do GitHub
;
2- Add um café para ele
 2.1- Então é criado uma issue no repositório

 [add imagem issue no github]

O problema, é que seria criado várias issues no Github e talvez a conta de alguns membros teria mais issues em seu GitHub do que
 código desenvolvido ou PR. Então a idéia que tivemos foi add um banco de dados na app (nada melhor do que usar um novo tipo de banco para aprender 
um pouco mais), adicionamos o MongoDB na aplicação.

Então o novo fluxo é:

1- O usuário faz login na app usando sua conta do GitHub
2- Add um café para ele
3- Add um café para o convidado
4- visualizar relatório do mês

[add gif da aplicação completa] [mobile]

Esse fluxo está fucionando bem por agora, novas fucionalidades será inserida com o passar do tempo, faça um fork do nosso projeto:

[link github]

=======================

Utilizamos algumas tecnologias:

Node para o back-end
Express para o Rest
MongoDB 
Gulp para o Runner Task
Stylus processador CSS
e para organização do layout um pouco de Flexbox <3
Hospedagem da aplicação no Heroku
