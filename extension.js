const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "d4s-tools-254190258634427" is now active!');

	let disposable = vscode.commands.registerCommand('d4s-tools-254190258634427.helloWorld', function () {
		
		vscode.window.showInformationMessage('Hello World from D4S Tools!');
	});

	let disposable2 = vscode.commands.registerCommand('d4s-tools-254190258634427.toolboxMenu', function () {
		var test = [
			{
				label: "Test 1",
				description: "Test 1 description"
			},
			{
				label: "Test 2",
				description: "Test 2 description"
			},
			{
				label: "Test 3",
				description: "Test 3 description"
			}
		];
		vscode.window.showQuickPick(test)
		.then(function (selection) {
			if (selection) {
				vscode.window.showInformationMessage("You selected " + selection.label);
			}
		}
		);
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
