import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {


  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),

  })

  constructor() { }
  userInput = new FormControl();
  ngOnInit(): void {
  }

  onSubmit(val: any): void {
    console.log(val)
    alert('Merci ' + val.name + ' pour votre interet !')
  }

}
