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
    },
    {
        'tag': 'table',
        'value': 'Generate Table Component',
        'ts': `
        import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public date:Date
  constructor() { }

  ngOnInit() {
    this.date = new Date();
  }

}
`,
        'html': `
        <div class="header">
    <img  src="https://www.johnbryce.co.il/src/jbh_small.jpg">
    <h1>Shaked shhh......</h1>
</div>
<!-- 
<div>
    
    <a href="#default" class="logo">Class 822.8 Haifa</a>
</div>
    
        `,
        'css': `
        div{
          height: 100%;
          background-color: blue;
          text-align: center;
          font-family: 'Gill Sans';
        }
        
        logoImage{
          text-align: start;
        }
        
        img{
          width: 100px;
          height: 50px;
          top: 50%;
          position: relative;
          margin: 5px;
          transform: translateY(-50%);
          vertical-align: middle;
          float: left;
        }
          
        
        a {
            color: white;
            text-decoration:dashed;
        }
        
        a:hover 
        {
             color:rosybrown;
             text-decoration:none; 
             cursor:pointer;  
        }
        
        p{
          margin: 0;
          position: relative;
          top:50%;
          transform: translateY(-50%);
          font-size: large;
          color: white;
          
        }
        
        h1{
          margin: 0;
          position: relative;
          color: white;
          top:50%;
          font-size: 40px;
          transform: translateY(-50%);
          
        }
        ` 
    }
];