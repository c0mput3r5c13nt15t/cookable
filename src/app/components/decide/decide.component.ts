import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decide',
  templateUrl: './decide.component.html',
  styleUrls: ['./decide.component.scss']
})
export class DecideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth"});
  }

  scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
