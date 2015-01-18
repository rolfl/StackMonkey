Introdução ao ${app}
-----------------------------------
Bem-vindo ao novo app Node.js!

O app Node.js é executado em um ambiente acionado por evento, altamente escalável e de alto desempenho do lado do servidor com E/S sem bloqueio que é programada com a linguagem de programação JavaScript.

1. [Instale a ferramenta de linha de comandos cf](${doc-url}/#starters/BuildingWeb.html#install_cf).
2. [Faça o download do pacote de aplicativo iniciador](${ace-url}/rest/apps/${app-guid}/starter-download).
3. Extraia o pacote e `cd` para ele.
4. Conecte-se ao Bluemix:

		cf api ${api-url}

5. Efetue login no Bluemix:

		cf login -u ${username}
		cf target -o ${org} -s ${space}

6. Implemente seu app:

		cf push ${app}

7. Acesse seu app: [${route}](//${route})

