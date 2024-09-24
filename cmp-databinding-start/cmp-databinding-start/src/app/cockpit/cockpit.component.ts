import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit {
  //inside <> of eventemitter, add the datatype that parent component is expecting,
  //here it is {serverName: string, serverdata:string}.
  //add () in the end to call constructor of eventemitter and craete a new eventEmitter objcet
  //that object is now stored in serverCreted

  //add @Output() decorator, as we are passing our event out of our component to other component
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverData: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverData: string }>();
  // newServerName = '';
  // newServerContent = '';

  //ElementRef is the refrence to that particular element. here it is refrence to the serverContentInput elemet
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer(NameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({serverName:NameInput.value, serverData: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(NameInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName:NameInput.value, serverData: this.serverContentInput.nativeElement.value});
  }

}
