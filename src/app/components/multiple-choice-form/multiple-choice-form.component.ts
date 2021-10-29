import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {option} from "../../interfaces/option";

@Component({
  selector: 'app-multiple-choice-form',
  templateUrl: './multiple-choice-form.component.html',
  styleUrls: ['./multiple-choice-form.component.scss']
})
export class MultipleChoiceFormComponent implements OnInit {
  @Input() choiceOf: string = "";
  @Input() options: option[] = [];
  @Output() submitEvent = new EventEmitter<any[]>();

  values: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  selectSide(value: string) {
    if (!this.values.includes(value)) {
      this.values.push(value);
    } else {
      this.values = this.values.filter(i => i != value);
    }

    // this.choseSideEvent.emit([this.choiceOf, value]);
  }

  submit(endOfForm: HTMLElement) {
    this.submitEvent.emit([this.choiceOf, this.values]);
    this.scroll(endOfForm);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth"});
  }
}
