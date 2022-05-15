import * as vscode from "vscode";
import ViewLoader from "./view/ViewLoader";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand("extension.viewconfig", () => {
    // @ts-ignore
    let openDialogOptions: vscode.OpenDialogOptions = {
      canSelectFiles: true,
      canSelectFolders: false,
      canSelectMany: false,
      filters: {
        gltf: ["gltf"],
      },
    };

    vscode.window
      // @ts-ignore
      .showOpenDialog(openDialogOptions)
      .then(async (uri: vscode.Uri[] | undefined) => {
        if (uri && uri.length > 0) {
          console.log(uri[0], "i am uri");
          const view = new ViewLoader(uri[0], context.extensionPath);
        } else {
          vscode.window.showErrorMessage("No valid file selected!");
          return;
        }
      });
  });

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
