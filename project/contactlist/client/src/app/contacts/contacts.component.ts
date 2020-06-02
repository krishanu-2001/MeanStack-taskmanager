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
  times:string;
  curid:string;
  date1: Date = new Date();
  time: Date = new Date();
  label: string;
  completed: string;
  done: string[];
  striked: string[];
  old: string[];

  constructor(private contactService: ContactService) { }

   addContact()
  {
    this.times = this.date1.toString() + " " + this.time.toString();
    this.completed = "0";
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      times: this.times,
      completed: this.completed,
      label: this.label,

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

  classToggled = true;

  public toggleField() {
    this.classToggled = !this.classToggled;  
  }

  setcompleted(compt, id){
    var contacts = this.contacts;
    var newContact;
    for(var i=0;i<this.contacts.length;i++)
                  {
                    if(contacts[i]._id == id)
                    {
                      newContact = contacts[i];
                    }
                  }
    newContact.completed = compt;
     
    this.contactService.updateContact(id, newContact)
            .subscribe(data=>{
                if(data.n == 1)
                {
                  for(var i=0;i<this.contacts.length;i++)
                  {
                    if(contacts[i]._id == id)
                    {
                      contacts[i].completed = compt;
                    }
                  }
                }
            });
  }

  ngOnInit(){
    this.contactService.getContacts().subscribe( contacts => this.contacts = contacts);
  }

}
