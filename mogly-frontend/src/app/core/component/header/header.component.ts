import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public search: string = '';

  constructor(
      private router: Router
    ) { }

  ngOnInit(): void {
  }

  public searchInfo() {
    if ('cadastro'.includes(this.search.toLowerCase())) {
      this.router.navigate(['registration']);
    } else if ('home'.includes(this.search.toLowerCase()) || 'inicio'.includes(this.search.toLowerCase())) {
      this.router.navigate(['home']);
    } else {
      alert('Nenhuma página encontrada!')
    }
  }

}
