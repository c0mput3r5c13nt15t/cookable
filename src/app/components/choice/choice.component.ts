import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {
  @Input() option1: string = "Option 1";
  @Input() option2: string = "Option 2";

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth"});
  }

}
