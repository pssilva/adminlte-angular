# AdminLTE Angular (adminlte-angular)

Converter o projeto [AdminLTE - Bootstrap 5 Admin Dashboard](https://github.com/ColorlibHQ/AdminLTE?tab=readme-ov-file#adminlte---bootstrap-5-admin-dashboard) para um projeto [Angular Framework](https://angular.io/).

Se trata de um projeto prático prova de conceito POC para deixar pegadas digitais e ser próativo para os processos seletivos onde as equipes técnicas de recrutadores tenham condições e evidências para verificar se o meu perfil pode atender as necessidades das oportunidades.

Procuro evidência as proficiências nas seguintes habilidades técnicas:

- [Angular Framework](https://angular.io/);
- Técnicas em [Análise Código-fonte Legados](#FEATHERS-michael);
- Técnicas em [Refatoração Código-fonte Legados](#FEATHERS-michael);
- Stacks de [rotinas operacionais de Front-end]();



Projeto inicializado com o [`ng new {{PROJECT_NAME}}`]().

## 🚀 Começando

### 📋 Pré-requisitos

De que coisas precisamos para instalar o software e como instalá-lo?

```bash
##############################################
# Instalação do NodeJS no Fedora
##############################################
sudo dnf install nodejs.x86_64
node -v
##############################################

##############################################
# Instalação do Node Version Manager no Fedora
##############################################
export NVM_VERSION="v0.39.3"

curl -o- "https://raw.githubusercontent.com/nvm-sh/nvm/${NVM_VERSION}/install.sh" | bash

nvm -v
nvm install --lts

##############################################

##############################################
# Instalação Typescript, Angular 
##############################################
export NG_CLI_VERSION="17.3.3"
npm install -g typescript "@angular/cli@${NG_CLI_VERSION}"
##############################################

```

### 🔧 Instalação

Para obter o presente projeto use os seguintes comandos:

```bash
mkdir -p "${HOME}/projetos"
cd "${HOME}/projetos"
git clone https://github.com/pssilva/adminlte-angular.git
cd adminlte-angular
code .
```

Em um terminal execute a aplicação com os seguintes linha de comandos:
```bash
cd "${HOME}/projetos/adminlte-Angular"
ng serve
```

Abra [http://localhost:4200/](http://localhost:4200/) com o seu navegador.

## Saiba Mais

Para saber mais sobre Next.js, dê uma olhada nos seguintes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - aprenda sobre os recursos e API do Next.js.
- [Learn Next.js](https://nextjs.org/learn) - um tutorial interativo do Next.js.

Você pode conferir [o repositório Next.js GitHub](https://github.com/vercel/next.js/) - seus comentários e contribuições são bem-vindos!

## Implantar no Vercel

A maneira mais fácil de implantar seu aplicativo Next.js é usar a [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira nossa [documentação de implantação do Next.js](https://nextjs.org/docs/deployment) para mais detalhes.

---

## 🔩 Débitos Técnicos

Aqui temos uma lista do que idenficamos com status de pendente:

### Funcionalidades Aplicação

Segue abaixo (não se limita) os objetivos do presente projeto:

- [X] ~~Formatando documentação README.md~~
- [X] ~~Indexação completa da playlist: [PLAYLIST 58 vídeos – 03.04.07.12.09 – CRUD Angular + Spring – Questões](docs/indexacoes/PLAYLIST%2058%20vídeos%20–%2003.04.07.12.09%20–%20CRUD%20Angular%20+%20Spring%20–%20Questões.pdf)~~ (mais detalhes veja [aqui](docs/indexacoes/README.md))
- [ ] Fatiar o Template HTML [AdminLTE - Bootstrap 5 Admin Dashboard](https://github.com/ColorlibHQ/AdminLTE?tab=readme-ov-file#adminlte---bootstrap-5-admin-dashboard) em componentes Angular
- [ ] Convertendo tag HTML header em um componente Angular;
- [ ] Abstrarir Componentes reutilizáveis especificos para o AdminETL
- [ ] Converter funcionalidades jQuery para componentes Angular reutilizáveis
- [ ] Implementar os rescursos do [Angular Framework](https://angular.io/)


### Atividades - DevOps

- [ ] Implementação dos Pipelines CI/CD de Implatação num Provedor de Nuvem (mais detalhes veja [aqui](docs/provedores_nuvem/README.md)).
- [ ] Implementar restrições de Commit no Git: vinculado com o ID de regra de negócio e ID do checklist de validação das entragas de funcionalidades (mais detalhes [aqui](docs/checklists/README.md))
- [ ] Implementar Dockerfiles para Kubernetes
- [ ] Colocar em prática o Desenvolvimento Orientado a Interface onde se deve desacoplar a aplicação do procedor de nuvem (Princípio da Segregação de Interface (ISP) - SOLID) (mais detalhes veja [aqui](docs/provedores_nuvem/README.md))
- [ ] Implementar Arquitetura Orienta a Eventos ([EDA](https://aws.amazon.com/pt/what-is/eda/))

### Suporte / Sustentação
- [ ] Abordagem API First e Implementação da Especificação do [OpenAPI (antido Swagger)](https://swagger.io/specification/) para integração com o back-end

### Segurança
- [ ] Aplicar o checklist (veja [aqui](docs/checklists/README.md)) das [vulnerabilidades mais recorrentes (Top 10 OWASP (Open Web Application Security Project))](https://owasp.org/Top10/) nas dependências usadas na solução
- [ ] implementar pentests para [vulnerabilidades Top 10 OWASP](https://owasp.org/Top10/)
- [ ] [Spring Boot externalized configuration](https://docs.spring.io/spring-boot/reference/features/external-config.html): Externalização das configurações dos parâmetros de uma aplicação
- [ ] Aplicar os checklists  

---

## 📦 Desenvolvimento

- [ ] Inplementar o gernciador de tarefas Gruntfile.js

### Mentalidade PDCA

Tendo em mente que sempre buscamos melhorar o protocolo de trabalho operacinal do dia a dia usando empirismo (colocar realmente em prática os conheicmentos abstratos):

<img src="docs/imgs/pdca.png" alt="PDCA: Aplicar na prática o empirismo" title="PDCA" style="width:475px;"/>

---

## 🛠️ Construído com

Seque aqui as ferramentas utilizadas na construção presente projeto:

* [AdminLTE - Bootstrap 5 Admin Dashboard](https://github.com/ColorlibHQ/AdminLTE?tab=readme-ov-file#adminlte---bootstrap-5-admin-dashboard)
* [Angular](https://pt-br.legacy.Angularjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/docs/)
* [Docker](https://www.docker.com/get-started/)
* [NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#intro) - Node Version Manager
* [Terminal Shell Linux (WSL)](https://learn.microsoft.com/pt-br/windows/wsl/install)


## 🖇️ Colaborando

Por favor, leia o [COLABORACAO.md](COLABORACAO.md) para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## 📌 Versão

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/suas/tags/do/projeto).

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Um desenvolvedor** - *Trabalho Inicial* - [pssilva](https://github.com/pssilva)


Você também pode ver a lista de todos os [colaboradores](COLABORACAO.md) que participaram deste projeto.

---

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md]() para detalhes.

---

## 🎁 Expressões de Gratidão

  Primeiro confesso aqui publicamente a minha gratidão ao Criado! E reconheço Jesus Cristo como o meu Senhor e Salvador! E que tudo é para honra e glória do Altissímo! Amém!! 📢

  Expresso gratidão pelas contribuções para comunidade aos seguintes Canais do Youtube:
  - [loianegroner](https://www.youtube.com/@loianegroner)
  - [fernandev](https://www.youtube.com/@fernandev1)

---

## Referencias Usadas

Seque abaixo as referências bibliográficas usadas no presente projeto:

---

<p align="justify">
[<a id="FEATHERS-michael">MARTIN, Robert C. | FEATHERS Michael</a>]: Working Effectively with Legacy Code. Library of Congress Cataloging-in-Publication Data: 2004108115 Copyright © 2005 Pearson Education, Inc. Prentice Hall Professional Technical Reference Upper Saddle River, NJ 07458. ISBN 0-13-117705-2 (Robert C. Martin Series, número). Disponível em: < <a href="https://a.co/d/3RZL8Sl">https://a.co/d/3RZL8Sl</a> >. Acesso em: 16 Mai. 2024.
</p>

---
<p align="justify">
[<a id="CRUD-ANGULAR-+-SPRING">CRUD ANGULAR + SPRING</a>]. Direção: Loiane Groner. Produção: Loiane Groner. Realização: Loiane Groner. Roteiro: Loiane Groner. Fotografia: N/A. Intérpretes: N/A; Loiane Groner. Local: Produzido no canal de stream Youtube,  5 de jul. de 2016 (há mais de 7 anos). Indicação do suporte físico e duração entre parênteses, demais características (tipo de sinal se vídeo, som, cor, legenda, tradução, tipo de película). Disponível em: <  <a href="https://www.youtube.com/playlist?list=PLGxZ4Rq3BOBpwaVgAPxTxhdX_TfSVlTcY">https://www.youtube.com/playlist?list=PLGxZ4Rq3BOBpwaVgAPxTxhdX_TfSVlTcY</a> >. Acesso em: 29 mai. 2024.
</p>

NOTA: para deixar evidenciado, segue a [indexação da playlist](./docs/indexacoes/README.md) (se trata de um questionário com o mapeamento do link de um tema / assunto no momemento onde se explica um conceito ou uma técnica de codificação).

---
<p align="justify">
[CURSO DE ANGULAR]. Direção: Loiane Groner. Produção: Loiane Groner. Realização: Loiane Groner. Roteiro: Loiane Groner. Fotografia: N/A. Intérpretes: N/A; Loiane Groner. Local: Produzido no canal de stream Youtube,  5 de jul. de 2016 (há mais de 7 anos). Indicação do suporte físico e duração entre parênteses, demais características (tipo de sinal se vídeo, som, cor, legenda, tradução, tipo de película). Disponível em: < https://youtube.com/playlist?list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&si=9ETFjwYZsV1ed7bU >. Acesso em: 29 mai. 2024.
</a>

---
<p align="justify">
<a id="Spring-Boot-and-Angular"></a>
[DULDULAO, Devlin Basilan, VILLAFRANCA], Seiji Ralph. [<a href="https://a.co/d/htReU6n">Spring Boot and Angular: Hands-on full stack web development with Java, Spring, and Angular</a>]. 1 Ed. Birmingham B3 2PB, UK.: Packt Publishing, Copyright © 2022. 438 p. (Nome da série e/ou coleção, ISBN 978-1-80324-321-4). Disponível em: < <a href="https://a.co/d/htReU6n">https://a.co/d/htReU6n</a> >. Acesso em: 29 mai.2024.
</a>
