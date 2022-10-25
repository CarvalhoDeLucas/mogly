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
      if (!this.testCell() || !this.testCpf() || !this.testDate() || !this.testEmail() || !this.testRg()) {
        return;
      }

      const data: { name: string, email: string, birthDate: string } = {
        name: this.formAuth.value.name,
        email: this.formAuth.value.email,
        birthDate: this.formAuth.value.date
      }

      console.log('teste');
      
      this.list.push(data);
      this.msgError = '';
    }
  }

  public clear() {
    this.msgError = '';
  }

  private testEmail(): boolean {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(this.formAuth.value.email)) {
      this.msgError = 'E-mail inválido!';
      return false;
    }

    return true;
  }

  private testDate(): boolean {
    if (this.formAuth.value.date == 0) {
      this.msgError = 'Data inválida!';
      return false;
    }

    return true;
  }

  private testCell(): boolean {
    const exp = /\(\d{2}\)\ \d{5}\-\d{4}/

    if (!exp.test(this.formAuth.value.cell)) {
      this.msgError = 'Numero de Telefone Invalido!';
      return false;
    }

    return true;
  }

  private testCpf(): boolean {
    const cpf = require('node-cpf');
    return cpf.validate(this.formAuth.value.cpf);
  }

  private testRg(): boolean {
    return this.formAuth.value.rg === 7;
  }

}
