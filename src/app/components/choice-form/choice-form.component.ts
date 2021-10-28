import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {option} from "../../interfaces/option";

@Component({
  selector: 'app-choice-form',
  templateUrl: './choice-form.component.html',
  styleUrls: ['./choice-form.component.scss']
})

export class ChoiceFormComponent implements OnInit {
  @Input() choiceOf: string = "";
  @Input() options: option[] = [];
  @Output() choseSideEvent = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
  }

  choseSide(endOfForm: HTMLElement, value: string) {
    this.choseSideEvent.emit([this.choiceOf, value]);
    this.scroll(endOfForm);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth"});
  }
}
