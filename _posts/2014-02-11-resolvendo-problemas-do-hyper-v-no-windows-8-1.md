---
layout: post
title: "Resolvendo problemas do Hyper-V no Windows 8.1"
date: 2014-02-11 09:35:00
---

Essa semana tive um problema em meu notebook ao instalar o [Visual Studio 2013][vs2013]. Para criar Apps para Windows Phone 8, é preciso instalar juntamente com o VS 2013 o [Hyper-V][hyper-v], que fornece serviços e ferramentas de gerenciamento para criação e execução de máquinas virtuais.

O Hyper-V desabilitou todas as portas USB do meu notebook, então foi preciso acessar os Recursos do Windows e desmarcar a caixa de seleção "Hyper-V", como mostra a imagem abaixo:

![post page](/assets/images/posts/desabilitar-hyper-v.gif)

Portanto quando você for desenvolver sua App para Windows Phone 8, é preciso repetir o processo descrito acima, marcando a caixa de seleção "Hyper-V" e reiniciar o sistema operacional.

[vs2013]: http://www.visualstudio.com/downloads/download-visual-studio-vs
[hyper-v]: http://pt.wikipedia.org/wiki/Hyper-V
