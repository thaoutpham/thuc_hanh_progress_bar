import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor = '#29f1b8';
  @Input() progressColor = '#a54caf';
  @Input() progress = 0;
  @Input() abc = 'hello';
  constructor() {
  }

  ngOnInit() {
    this.loading();
    alert('abc');
  }

  loading() {
    let interval = setInterval(() => {
      this.progress = +this.progress + 0.01;
      if (this.progress == 100) {
        clearInterval(interval);
      }
    }, 1);
  }
}
