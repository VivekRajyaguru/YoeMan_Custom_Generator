var Generator = require('yeoman-generator');
var fs = require('fs');

method1 = function(destinationPath) {
    this.log('Method 1 Run');
   
};

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.option('babel');
    }

    /* installDependencies() {
        this.npmInstall(['lodash'], {'save-dev': true});
    } */

    /* writing() {
        const pkgJson = {
            devDependencies: {
                eslint: '^3.15.0'
            },
            dependencies: {
                eslink: '^3.15.0'
            }
        }
        this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
    } */

    

    prompting() {
        return this.prompt([{
            type : 'input',
            name: 'cName',
            message: 'Component Name',
            default: 'Demo'
        }]).then((answer) => {
            this.log('component Name', answer.cName);
            this.fs.copyTpl(
                this.templatePath('app.component.ts'),
                this.destinationPath(answer.cName+'/'+answer.cName+'-component.ts'),
                { componentName: answer.cName}
            );
            this.fs.copyTpl(
                this.templatePath('app.component.html'),
                this.destinationPath(answer.cName+'/'+answer.cName+'-component.html'),
                { componentName: answer.cName}
            );
            this.fs.copyTpl(
                this.templatePath('app.component.css'),
                this.destinationPath(answer.cName+'/'+answer.cName+'-component.css'),
                { componentName: answer.cName}
            );        
        });
    }

    /* install() {
        this.npmInstall();
    } */
};