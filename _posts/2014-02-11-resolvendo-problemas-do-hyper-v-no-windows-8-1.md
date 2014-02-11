---
layout: post
title: "Resolvendo Problemas do Hyper-V no Windows 8.1"
---

Essa semana eu tive um problema em meu notebook ao instalar o Visual Studio 2013. Para se criar Apps para Windows Phone 8, é preciso instalar jutamente com o VS 2013 o Hyper-V, que fornece serviços e ferramentas de gerenciamento para criação e a execução de máquinas virtuais.

O Hyper-V desabilitou todas as portas USB do meu notebook, então foi preciso eu acessar os Recursos do Windows e desamarcar a caixa de seleção "Hyper-V", como aparece na imagem abaixo:

![index page](/assets/images/posts/desabilitar-hyper-v.gif)

Quando você for desenvolver sua app para Windows Phone 8, é preciso repetir o processe descrito acima e marcar a caixa de seleção "Hyper-V" e reiniciar o sistema operacional.