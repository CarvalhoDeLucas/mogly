import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public msgError!: string;

  public formAuth: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    date: ['', [Validators.required]],
    cell: ['', Validators.required],
    cpf: ['', Validators.required],
    rg: ['', Validators.required],
  });

  public profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    date: new FormControl(''),
    cell: new FormControl(''),
    cpf: new FormControl(''),
    rg: new FormControl(''),
  });

  public list: Array<{ name: string, email: string, birthDate: string }> = [
    {
      name: 'Lucas',
      email: 'lucas@gmail.com',
      birthDate: '2001-01-14'
    }
  ];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void { }

  public submitForm() {
    if (!this.formAuth.valid) {
      this.msgError = 'Preencha todos os campos corretamente!';
    } else {
      const data: { name: string, email: string, birthDate: string } = {
        name: this.formAuth.value.name,
        email: this.formAuth.value.email,
        birthDate: this.formAuth.value.date
      }

      this.list.push(data);
    }
  }

  public clear() {
    this.msgError = '';
  }

}
