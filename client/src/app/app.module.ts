import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {ContactService} from './contact.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { EditComponent } from './edit/edit.component';

import {RouterModule,Routes} from '@angular/router';

const approutes:Routes=[{
  path:'edit/:id',
  component:EditComponent
},
{
  path:'',
  component:ContactsComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(approutes),

  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
