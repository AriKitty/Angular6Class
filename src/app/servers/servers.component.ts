import { Component, OnInit } from '@angular/core';

@Component({

  // Selectors can be elements, class, or css selector
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',

  // Must have template or remplateUrl.
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName = 'TestServer';

  constructor() {
    // Enables creation of server after 2 seconds
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
