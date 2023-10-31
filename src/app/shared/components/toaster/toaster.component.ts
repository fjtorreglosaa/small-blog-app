import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styles: [
  ]
})
export class ToasterComponent {

  @Input()
  message : string = '';

  @Input()
  title : string = '';

}
