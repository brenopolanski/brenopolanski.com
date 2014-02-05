---
layout: post
title: "Meu primeiro grande projeto Open Source"
date: 2014-02-03 22:52:00
---

Deste a metade do ano passado, venho trabalhando em meu projeto de conclusão de curso, que é o [CactusJS][cactusjs-gh], um framework open source para desenvolvimento de games com HTML5 para plataforma Microsoft (Windows 8 e Windows Phone 8). 

O framework terá um plug-in no software Visual Studio, possibilitando aos desenvolvedores a criação de games diretamente na ferramenta de desenvolvimento, de forma mais rápida e reduzindo a complexidade dos algoritmos, fazendo com que o mesmo se concentre apenas na solução do seu problema.

O projeto está sendo estruturado utilizando o conceito de módulos [AMD][wiki-amd] (Asynchronous Module Definition) com [RequireJS][requirejs] para gestão de módulos e [Jasmine][jasmine] para especificação de comportamento (BDD). Utiliza-se também uma lib chamada [Jaws][jaws], uma biblioteca JavaScript+HTML5 que suporta tanto Canvas quanto DOM, baseando-se em Sprites.

Link do projeto: [CactusJS HTML5 Game Framework][cactusjs-gh]

[cactusjs-gh]: http://cactusjs.github.io/cactusjs-website/
[wiki-amd]: http://en.wikipedia.org/wiki/Asynchronous_module_definition
[requirejs]: http://requirejs.org/
[jasmine]: http://pivotal.github.io/jasmine/
[jaws]: http://jawsjs.com/