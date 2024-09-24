import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input,
  OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  //add decorator @Input
  //here srvElement is an alias to use it outside an component. It it optional. if we use alias,
  //then we need to use the same alias name in that component(app Component) from where we are calling this property from
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild ('heading', {static: true}) header: ElementRef;
  @ContentChild ('contentParagraph', {static:true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called.');

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called.');
    console.log(changes);
    // for (const propName in changes) {
    //   const change = changes[propName];
    //   const currentValue = change.currentValue;
    //   const previousValue = change.previousValue;
    //   console.log(`Property '${propName}' changed.
    //     Current Value: ${currentValue}.
    //     Previous Value: ${previousValue}`);
    // }
  }

  ngOnInit(): void {
    console.log('ngOnInit called.');
    console.log('Text Content:'+ this.header.nativeElement.textContent);
    console.log('Paragrah Content:'+ this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log('Paragrah Content:', this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('Text Content:'+ this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
