import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm!:FormGroup;
  isSubmitClicked=false
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { 
    this.contactForm=this.fb.group({
      name:['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      email:['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$')]],
      mobile:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      message:['', [Validators.required, Validators.pattern('[a-zA-Z]*')]]
    })
  }

  public get contactFormControl() { return this.contactForm.controls; }

  contact(contactForm:{name, email, mobile, message}){ 
    this.isSubmitClicked = true;
    if(this.contactForm.status == 'INVALID'){
      console.log('invali')
    }
    if(this.contactForm.status == 'VALID'){
      console.log('vali')
    }
  }
}
