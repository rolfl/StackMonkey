Einführung in ${app}
-----------------------------------
Willkommen bei Ihrer neuen Node.js-Anwendung!

Die Node.js-Anwendung wird in einer serverseitigen, stark skalierbaren, ereignisgesteuerten Hochleistungsumgebung mit nicht blockierender E/A ausgeführt, die in der Programmiersprache JavaScript geschrieben ist.

1. [Das Befehlszeilentool 'cf' installieren](${doc-url}/#starters/BuildingWeb.html#install_cf).
2. [Das Starteranwendungspaket herunterladen](${ace-url}/rest/apps/${app-guid}/starter-download).
3. Das Paket extrahieren und nach `cd` wechseln.
4. Verbindung zu Bluemix herstellen:

		cf api ${api-url}

5. Bei Bluemix anmelden:

		cf login -u ${username}
		cf target -o ${org} -s ${space}

6. Ihre Anwendung (App) bereitstellen:

		cf push ${app}

7. Auf Ihre Anwendung (App) zugreifen: [${route}](//${route})

