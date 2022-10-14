import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public list: Array<{ name: string, email: string, birthDate: string }> = [
    {
      name: 'Lucas',
      email: 'lucas@gmail.com',
      birthDate: '14/01/2001'
    }
  ];

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
