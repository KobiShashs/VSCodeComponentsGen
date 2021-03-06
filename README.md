# VS Code KS Templates

**Classic for Angular 8.0.0 release**

This extension for Visual Studio Code adds snippets for generate templates for Angular 8.

![Use Extension](images/icon.png)

See the [CHANGELOG](CHANGELOG.md) for the latest changes


## DIY

Hi, this is a simple VSCode extension to generate Angular components.

Make sure to run:
```
npm install
```

Open the `package.json` file and make sure to edit:
- name
- displayName
- version
- author
- publisher

Put your components into `data/choice.ts`. Make sure that file
is a valid TypeScript file.

```
export const CHOICES = [
    {
        'tag': 'home',
        'value': 'Generate Home Component',
        'ts': ``,
        'html': ``,
        'css': ``
    },
    {
        'tag': 'landing',
        'value': 'Generate Landing Component',
        'ts': ``,
        'html': ``,
        'css': ``
    },
];
```
