export const CHOICES = [
    {
        'tag': 'home',
        'value': 'Generate Home Component',
        'ts':
`import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['./home.css']
})
export class HomeComponent {
  constructor() {}
}`,
        'html': 
`<p>home component</p>
`,
        'css': 
`/* styles */`
    }
];