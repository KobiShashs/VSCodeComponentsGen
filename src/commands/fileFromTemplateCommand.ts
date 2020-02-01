"use strict";

import vscode = require("vscode");
import fs = require("fs");
import path = require("path");
import TemplatesManager from "../templatesManager";
import helpers = require("../helpers");
import moment = require("moment");
import { formatTemplate } from "../templates";
import { CHOICES } from "../../data";
var fsextra = require('fs-extra');

/**
 * Main command to create a file from a template.
 * This command can be invoked by the Command Palette or in a folder context menu on the explorer view.
 * @export
 * @param {TemplatesManager} templatesManager
 * @param {*} args
 * @returns
 */
export function run(args: any) {

    let targetFolder = args ? args.fsPath : vscode.workspace.rootPath;

    vscode.window.showQuickPick(CHOICES.map(c => c.value), { placeHolder: 'Select the component.' })
        .then((choice) => {
            let obj = CHOICES.find(o => o.value === choice);
            
            const fullname = path.join(targetFolder, obj.tag);

            fs.writeFile(fullname + '.component.ts', obj.ts, function (err) {
                if(err) {
                    vscode.window.showInformationMessage(err.message);
                }
            });

            fs.writeFile(fullname + '.component.html', obj.html, function (err) {
                if(err) {
                    vscode.window.showInformationMessage(err.message);
                }
            });

            fs.writeFile(fullname + '.component.css', obj.css, function (err) {
                if(err) {
                    vscode.window.showInformationMessage(err.message);
                }
            });
        });



    // vscode.window.showInputBox({ prompt: 'Please provider a component name.' }).then((filename) => {
    //     const fullname = path.join(targetFolder, filename);
        

    //     vscode.window.showInformationMessage("Generating a component...", fullname);

    //     fs.writeFile(fullname + '.component.ts', formatTemplate(filename, 'component'), function (err) {
    //         if(err) {
    //             vscode.window.showInformationMessage(err.message);
    //         }
    //     });

    //     fs.writeFile(fullname + '.component.html', formatTemplate(filename, 'template'), function (err) {
    //         if(err) {
    //             vscode.window.showInformationMessage(err.message);
    //         }
    //     });

    //     fs.writeFile(fullname + '.component.css', formatTemplate(filename, 'styles'), function (err) {
    //         if(err) {
    //             vscode.window.showInformationMessage(err.message);
    //         }
    //     });
    // });

}
