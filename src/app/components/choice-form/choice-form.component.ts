import {Component, Input, OnInit} from '@angular/core';
import {option} from "../../interfaces/option";

@Component({
  selector: 'app-choice-form',
  templateUrl: './choice-form.component.html',
  styleUrls: ['./choice-form.component.scss']
})

export class ChoiceFormComponent implements OnInit {
  @Input() options: option[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth"});
  }
}
