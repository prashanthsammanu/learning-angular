import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  // selector: '[app-servers]',
  selector:'.app-servers',
 // template: `
  //<app-server></app-server>
  //<app-server></app-server>`,

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   allowNewSever = false;
  constructor() { 
    setTimeout(() => {this.allowNewSever=true;}, 2000);
  }

  ngOnInit() {
  }

}
