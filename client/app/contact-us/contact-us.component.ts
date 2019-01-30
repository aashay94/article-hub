import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  template: require('./contact-us.component.html'),
  styles: [require('./contact-us.component.css')]
})

export class ContactUsComponent implements OnInit {
  
  static parameters = [HttpClient];
  constructor(private http: HttpClient) { 
    this.http = http;
  }


  ngOnInit() {
  }
  contact = {email:"",message:""};
  email(event) {
    this.contact.email = event.target.value;
  }
  message(event) {
    this.contact.message = event.target.value;
  }
  sendMail(event) {
    console.log(this.contact)
    return this.http.post('/api/users/sendMail',this.contact)
    .subscribe((response)=>{
      window.alert("Mail Sent");
      console.log(response);
    });
  }
}
