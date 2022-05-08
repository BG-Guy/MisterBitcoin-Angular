import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MisterBitcoin-Angular';

  scroll: number

  ngOnInit(): void {
     document.addEventListener('scroll', () => {
      this.scroll = window.scrollY / 100
    })
  }
}
