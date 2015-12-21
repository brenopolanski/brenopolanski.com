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

Eu já estava querendo estudar algumas novas tecnologias, nada melhor que colocar o conhecimento em prática. Então comecei primeiramente criando alguns mockups para a app (eu gosto muito de fazer alguns sketches no papel para depois finalmente usar alguma [ferramenta](https://balsamiq.com)).

<p align="center">
	<img src="https://raw.githubusercontent.com/brenopolanski/brenopolanski.github.io/master/assets/images/posts/app-coffee-club-sketch1.jpg" style="width: 500px;" height="325" />
	<img src="https://raw.githubusercontent.com/brenopolanski/brenopolanski.github.io/master/assets/images/posts/app-coffee-club-sketch3.jpg" style="width: 400px;" />
	<img src="https://raw.githubusercontent.com/brenopolanski/brenopolanski.github.io/master/assets/images/posts/app-coffee-club-mockup.png" style="width: 800px;" />
</p>

No início a aplicação tinha o seguinte fluxo:

1 - O usuário fazia login na app usando sua conta do GitHub; <br />
2 - Adicionava um café; <br />
3 - Era criado uma issue no repositório.

<p align="center">
	<img src="https://raw.githubusercontent.com/brenopolanski/brenopolanski.github.io/master/assets/images/posts/app-coffee-club-issue.png" />
</p>

O problema, é que seria criado várias issues no repositório e talvez a conta de alguns membros teria mais issues em seu GitHub do que código desenvolvido ou Pull Requests. Então a idéia que tivemos foi adicionar um banco de dados na app (nada melhor do que usar um novo tipo de banco para aprender um pouco mais), adicionamos o [MongoDB](https://www.mongodb.org) na aplicação.

Então o novo fluxo é:

1 - O usuário faz login na app usando sua conta do GitHub; <br />
2 - Adiciona um café ou um café para o convidado do Hackspace; <br />
3 - Visualizar relatório do mês.

<p align="center">
	<img src="https://raw.githubusercontent.com/brenopolanski/coffee-club/assets/mobile1.jpg" style="width: 200px;" />
	<img src="https://raw.githubusercontent.com/brenopolanski/coffee-club/assets/mobile2.jpg" style="width: 200px;" />
	<img src="https://raw.githubusercontent.com/brenopolanski/coffee-club/assets/mobile3.jpg" style="width: 200px;" />
	<img src="https://raw.githubusercontent.com/brenopolanski/coffee-club/assets/mobile4.jpg" style="width: 200px;" />
</p>

Até agora esse fluxo está fucionando bem, novas fucionalidades serão inseridas com o passar do tempo, faça um fork do nosso projeto:

[https://github.com/brenopolanski/coffee-club](https://github.com/brenopolanski/coffee-club)

### Tecnologias utilizadas:

- [NodeJS](https://nodejs.org/en/) para o back-end;
- [Express](http://expressjs.com/en/) Framework para o Node.js;
- [MongoDB](https://www.mongodb.org) banco de dados NoSQL;
- [GulpJS](http://gulpjs.com/) para o Runner Tasks;
- [Stylus](http://stylus-lang.com/) processador CSS;
- Para organização do layout um pouco de [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/);
- Hospedagem da aplicação no [Heroku](https://heroku.com/deploy).
