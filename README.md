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
#   V S C o d e C o m p o n e n t s G e n  
 