---
layout: post
title: Pré-Processadores CSS
date: 2013-11-10 12:00:00
categories: blog
description: Uma visão geral sobre pré-processadores CSS
---

Olá,

Mais uma vez sumi, e hoje voltei :)

Como descrito no título do post, vou tentar escrever um pouco sobre os pré-processadores css, (lembrando que existem os pré-processadores de HTML e JS).

<!-- more -->

CSS é uma linguagem simples, que tem por objetivo fazer uma tarefa que até pouco tempo atrás era simples, mas a Web evoluiu, tudo evoluiu, e algumas coisas começaram a ficar complexas, com o CSS não foi diferente.

Os sites foram ficando complexos, tornando-se verdadeiros sistemas, e os arquivos CSS naturalmente gigantes, manutenção complicada e nada de reuso.

Com o surgimento dos pré-processadores de CSS, tudo ficou + divertido novamente.

Atualmente, temos 3 pré-processadores de CSS bem conhecidos e utilizados, são eles: <a href="http://lesscss.org/" target="_blank">Less</a>, <a href="http://sass-lang.com" target="_blank">Sass</a> e <a href="http://learnboost.github.io/stylus/" target="_blank">Stylus</a> (Ok, esse último nem é tão usado assim, mas tudo bem).

Basicamente, os pré-processadores CSS servem para adicionar funcionalidades e tornar o desenvolvimento de CSS mais ágil e dinâmico, facilitando o reuso e aumentando a produtividade.

> Todos os pré-processadores citados acima são compilados para CSS, ou seja, no final o seu arquivo vai ser .css, simples assim.

O Less, utiliza JavaScript (NodeJS) para compilar, assim como o Stylus, já o Sass, por padrão utiliza Ruby, ou seja, você precisa ter Ruby instalado para usar, porém, existem compiladores em <a href="https://github.com/andrew/node-sass" target="_blank">NodeJS</a> e <a href="https://github.com/hcatlin/libsass" target="_blank">C</a>.

Não vou entrar em detalhes de qual é o melhor, ou falar pra você usar X pois o Z te dá muita liberdade e seu código fica uma bagunça, vou apenas mostrar alguns exemplos do Sass, que é o meu pré-processador preferido.

O Sass possui dois tipos de sintaxe com extensões diferentes (.sass e .scss); a primeira e mais antiga, existe desde a primeira versão do Sass, inspirado pelo Ruby, você não precisa se preocupar com ponto e vírgula, apenas com espaço e identação. Já a segunda, surgiu em versão posterior, e se parece como CSS normal, atualmente é a mais utilizada.

Como falei acima, um dos principais benefícios dos pré-processadores é adicionar funcionalidades. Sabe aquela cor em hexadecimal que tu nunca lembra de cabeça, não seria uma boa armazenar ela em uma variável? Então...

{% highlight scss %}
// .scss
$azul: #6f92ba;

p {
  color: $azul;
}

// .sass
$azul: #6f92ba

p
  color: $azul
{% endhighlight %}

Outra coisa bacana são os aninhamentos, ao invés de escrever assim:

{% highlight css %}
ul {
  list-style: none;
}

ul li {
  float: left;
}

ul li a {
  color: tomato;
}

ul li a:hover {
  color: teal;
}
{% endhighlight %}

Com o sass você pode fazer melhor, pode fazer assim:

{% highlight scss %}
// .scss
ul {
  list-style: none;
  li {
    float: left;
    a {
      color: tomato;
      &:hover {
        color: teal;
      }
    }
  }
}

// .sass
ul
  list-style: none
  li
    float: left
    a
      color: tomato
      &:hover
        color: teal
{% endhighlight %}

> Cuidado com os aninhamentos, pelo bem da performance, evite usar mais de 3 aninhamentos, use classes!

Cálculos, sim, com o Sass você pode fazer uso de funções matématicas para alcançar seu objetivo:

{% highlight scss %}
// Podemos usar todas as operações
// .scss
margin: 40px + 10px;
margin: 40px - 10px;
margin: 40px * 10px;
margin: (40px / 10px);

// .sass
margin: 40px + 10px
margin: 40px - 10px
margin: 40px * 10px
margin: (40px - 10px)
{% endhighlight %}

Ainda na parte de cálculos, por padrão o Sass possui algumas funções que você pode usar:

{% highlight scss %}
// .scss
width: percentage(2.5); // retorna => width: 250%;
width: round(10.6px); // retorna => width: 10px;
width: ceil(10.6px); // retorna => width: 11px;
width: floor(2.5px); // retorna => width: 2px;
width: abs(-2.5px); // retorna => width: 2.5px;

// .sass
width: percentage(2.5)
// etc...
{% endhighlight %}

Existem muitas outras operações envolvendo números e até mesmo cores!

Falando um pouco do reuso, podemos fazer algo assim:

{% highlight scss %}
// .scss
.btn {
  width: 140px
  padding: 10px;
}
.btn-success {
  @extend .btn;
  background: green;
}

// Resultado:
.btn,
.btn-success {
  width: 140px
  padding: 10px;
}
.btn-success {
  background: green;
}
{% endhighlight %}

Mixins são funções que você escreve, vejamos um exemplo:

{% highlight scss %}
// .scss
@mixin box($bg-color, $color) {
  background: $bg-color;
  color: $color;
}

// Usando...
// .scss
.big-box {
  @include box(black, white)
}

// .sass
// Repare que usando .sass, a figura muda um pouco, usamos o sinal de + ao invés da palavra @include
.big-box
  +box(black, white)
{% endhighlight %}

Posso até mesmo usar while, for, if, etc

{% highlight scss %}
// .scss
$i: 1;

@while $i <= 6 {
  h#{$i} {
    font-size: 50px - ($i* 5px);
  }
  $i: $i + 1;
}

// Resultado:
h1 {
  font-size: 45px;
}
h2 {
  font-size: 40px;
}
h3 {
  font-size: 35px;
}
h4 {
  font-size: 30px;
}
h5 {
  font-size: 25px;
}
h6 {
  font-size: 20px;
}
{% endhighlight %}

Bem legal!

Hoje outro termo que sempre se ouve por aí é modularização, quebrar o seu código em vários pedaços para facilitar a manutenção e organização.

Com o Sass (ou melhor, os pré-processadores css), podemos usar esse conceito de módulos sem nos preocupar com "quanto + módulos, + requisições".

Digamos que eu tenha 3 arquivos css separados, e chamo eles separadamente no head da minha página, com o Sass, podemos usar o @import:

> Posso criar um arquivo style.scss e nele incluir meus imports

{% highlight scss %}
// .scss
@import 'normalize';
@import 'base';
@import 'layout';
{% endhighlight %}

O resultado é 1 arquivo apenas, com o conteúdo dos 3 arquivos, e apenas uma requisição :)

É isso, espero ter cobrido o básico do básico sobre pré-processadores, neste caso o Sass.

Não deixe de ler a documentação oficial, entre outros links abaixo:

<ul>
  <li><a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html" target="blank">Documentação Sass</a></li>
  <li><a href="http://thesassway.com/" target="_blank">The Sass Way</a></li>
  <li><a href="http://compass-style.org/" target="_blank">Compass</a></li>
  <li><a href="http://bourbon.io/" target="_blank">Bourbon</a></li>
  <li><a href="http://neat.bourbon.io/" target="_blank">Bourbon Neat</a></li>
  <li><a href="http://hugogiraudel.com/" target="_blank">Hugo Giraudel</a></li>
  <li><a href="http://css-tricks.com/sass-style-guide/" target="_blank">Sass Style Guide by Chris Coyier</a></li>
</ul>

Até a próxima!
