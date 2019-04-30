import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders,HttpHeaderResponse } from '@angular/common/http'
//import {Headers} from '@angular/common/http';

import {Contact} from './contact';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { map, filter, switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private h:HttpClient) { }
  uri = 'http://localhost:3001/api';

  //retireving contact
  getContacts():Observable<Contact[]>{
return this.h.get<Contact[]>(`${this.uri}/contacts`).pipe(map(res=>res));
  }
  //add Contact
addContact(newContact){
 // var headers=new HttpHeaderResponse();
 // headers.append('Content-Type','applciation/json');
  return this.h.post(`${this.uri}/contact`,newContact).pipe(map(res=>res));

}
deleteContact(id){

  return this.h.delete(`${this.uri}/contact/`+id).pipe(map(res=>res));
}
editContact(id){
  return this.h.get(`${this.uri}/edit/`+id).pipe(map(res=>res));
}

updateContact(updateContact,id) {

 // const obj = {
 //   first_name: first_name,
  //  last_name: last_name,
  //  phone: phone,
    //};
  this
    .h
    .post(`${this.uri}/update/${id}`, updateContact)
    .subscribe(res => console.log('cont service update'));
}

}
