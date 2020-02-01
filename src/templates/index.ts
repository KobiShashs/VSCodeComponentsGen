export function formatTemplate(filename, tag?: string) {

  if (tag === 'component') {
    const COMPONENT = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-${filename}',
  templateUrl: 'src/app/${filename}.component.html'
})
export class ${filename[0].toUpperCase() + filename.slice(1)}Component {
  constructor() {}
}
`;

    return COMPONENT;
  }

  if (tag === 'template') {
    const TEMPLATE = `
<p>Hello world</p>
`;
    return TEMPLATE;
  }

  if (tag === 'styles') {
    const STYLES = `
/* CSS Style here */
`;
    return STYLES;
  }

}
