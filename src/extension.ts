// The module 'vscode' contains the VS Code extensibility API

import * as vscode from 'vscode';
import { EasyMakePanel } from './EasyMakePanel';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "easymake" is now active!');
	context.subscriptions.push(vscode.commands.registerCommand('easymake.storyboard', () => {
		EasyMakePanel.createOrShow(context.extensionUri);
	})
	);

	
}

export function deactivate() {}
