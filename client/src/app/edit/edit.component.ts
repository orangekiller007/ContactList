import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ContactService } from '../contact.service'
import { Contact } from '../contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
contact:any={};
contacts:Contact[];
first_name:string='';
last_name:string='';
phone:string='';

  constructor(private router: Router,private bs:ContactService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editContact(params['id']).subscribe(res => {
        this.contact = res;
    });
  });
  }

  
  updateContact(e) {
   // var first_name=e.target.elements[0].value;
//var last_name=e.target.elements[1].value;
//var phone=e.target.elements[2].value;

/*
this.bs.getContacts().subscribe(contacts =>
  this.contacts = contacts);
  this.router.navigate(['']); */
  const updatedContact={
    first_name:this.first_name,
    last_name:this.last_name,
    phone:this.phone
  }

    this.route.params.subscribe(params => {
       this.bs.updateContact(updatedContact, params['id']);
     console.log(this.bs.getContacts().subscribe(contacts=>this.contacts=contacts));
       //this.bs.getContacts().subscribe(contacts =>
        //this.contacts = contacts);
        this.router.navigate(['']); 
 });



}
}


