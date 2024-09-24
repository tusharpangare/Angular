import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name:'Test Server', content:'Just the contet'}];

  onServerAdded(serverData: {serverName: string, serverData: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content:serverData.serverData
    });
  }

  OnBluePrintAdded(blueprintData: {serverName: string, serverData: string}) {
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.serverName,
      content:blueprintData.serverData
    })
  }

  onChanedFirstElemet(){
    this.serverElements[0].name='Changed';
  }

  onDestroyFirstElemet(){
    this.serverElements.splice(0,1);
  }
}
