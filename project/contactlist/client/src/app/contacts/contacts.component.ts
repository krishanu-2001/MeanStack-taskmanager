import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;
  first_name: string;
  last_name: string;
  phone:string;
  curid:string;
  date1: Date = new Date();
  time: Date = new Date();
  label: string;

  constructor(private contactService: ContactService) { }

   addContact()
  {
    this.phone = this.date1.toString() + " " + this.time.toString() + " " + this.label;
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone,

    };
    this.contactService.addContact(newContact)
        .subscribe(contact=>{
          this.contacts.push(contact);
          this.contactService.getContacts().subscribe( contacts => this.contacts = contacts);
        });
  }

  deleteContact(id:any)
  {
    var contacts = this.contacts;
    this.contactService.deleteContact(id)
            .subscribe(data=>{
                if(data.n == 1)
                {
                  for(var i=0;i<this.contacts.length;i++)
                  {
                    if(contacts[i]._id == id)
                    {
                      contacts.splice(i,1);
                    }
                  }
                }
            });
  }

  setcurid(id:any)
  {
    this.curid = id;
  }

  getcurid()
  {
    return this.curid;
  }

  ngOnInit(){
    this.contactService.getContacts().subscribe( contacts => this.contacts = contacts);
  }

}
