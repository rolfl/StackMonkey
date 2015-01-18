${app} 入门
-----------------------------------
欢迎使用新 Node.js 应用程序！
Node.js 应用程序在服务器端的高性能、可高度扩展、以事件驱动的环境中运行，该环境具有以 JavaScript 编程语言编写的非阻塞的 I/O。

1. [安装 cf 命令行工具](${doc-url}/#starters/BuildingWeb.html#install_cf)。
2. [下载起动器应用程序包](${ace-url}/rest/apps/${app-guid}/starter-download)。
3. 将程序包和 `cd` 抽取到它。
4. 连接到 Bluemix：

		cf api ${api-url}

5. 登录到 Bluemix：

		cf login -u ${username}
		cf target -o ${org} -s ${space}

6. 部署您的应用程序：

		cf push ${app}

7. 访问您的应用程序：[${route}](//${route})

