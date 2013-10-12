---
comments: true
date: 2013-03-03 21:31:42
layout: post
slug: o-que-e-git-parte-1
title: Git - Parte 1
categories:
- Git
tags:
- Bitbucket
- Git
- GitHub
- Linux
---

Afinal, o que é esse tal de Git (/ɡɪt/) que tanto se fala nos dias atuais?

Provavelmente você já ouviu esse termo em algum lugar, certo? Não? Qual caverna você esteve?

<del>E SVN, já ouviu falar? Esse eu aposto que sim.</del>

Então, Git é um sistema de controle de versão open source, criado por um tal de [Linus Torvalds](http://pt.wikipedia.org/wiki/Linus_Torvalds). Seu principal objetivo era ajudar no controle e versionamento do [Kernel de um tal de Linux...](http://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git)

<!-- more -->

Focado em performance, o Git é extremamente rápido, e muito útil para quem trabalha em equipe, pois facilita e muito a organização e distribuição do fonte do projeto, permitindo várias pessoas editar o mesmo arquivo ao mesmo tempo.

### **Ok, e como eu faço para usar o <del>_Chitê_</del>_ _Git (Guit)?**


<del>Você vai precisar de uma tesoura sem ponta...</del>

Se você usa OS X e tem instalado o [Homebrew](http://mxcl.github.com/homebrew/), basta executar o seguinte comando no terminal:

{% highlight text %} 
$ brew install git
{% endhighlight %}

Ou você pode baixar o instalador [aqui](http://git-scm.com/download/mac).

.

Se você usa Linux (Ubuntu), abra uma janela do terminal e:

{% highlight text %} 
$ apt-get install git
{% endhighlight %}


Se você usa Windows, baixe o instalador [aqui](http://git-scm.com/download/win).


### **Git instalado, o que eu faço agora?**


Agora é só começar a usar, não vou explicar todos os detalhes, mas basicamente você vai precisar de um local para armazenar os códigos, basicamente um repositório.

Você pode usar o Dropbox (pergunta pro oráculo como se faz), ou instalar o Git no seu servidor, caso você tenha um. Ou ainda, pode usar serviços como o nada conhecido GitHub e Bitbucket.

Ambos são excelentes, e ambos possuem planos _Free _a diferença basicamente é que na versão grátis do Bitbucket você pode criar quantos repositórios privados você desejar, porém tem um limite de colaboradores, o que pode ser um problema se você trabalha numa equipe com muitas pessoas.

[Planos e preços Bitbucket](https://bitbucket.org/plans)

Já o GitHub, a sua versão grátis não lhe permite criar nenhum repositório privado, porém se você é estudante como eu, pode conseguir um plano micro, com 5 repositórios privados, para isso clique [neste link e siga os passos](https://github.com/edu). Ora pois, já estava me esquecendo, no GitHub a quantidade de colaboradores é ilimitada, uma boa se você tem uma equipe grande.

[Planos e preços do GitHub](https://github.com/plans)

No próximo post, irei focar no Git em si, como usar, iniciar um repositório, fazer um commit, mandar o código pro servidor/repositório, etc...

Enquanto isso, leia os links que deixarei abaixo, e aguarde o próximo post, que eu espero não demorar tanto para escrever...

[Git - Guia Prático](http://rogerdudler.github.com/git-guide/index.pt_BR.html)

[eBook - Pro Git (English)](http://git-scm.com/book)

Ah, e veja este outro link aqui -> [Try GitHub](http://try.github.com/)

Au revoir à tous!


