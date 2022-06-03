import {Injectable, EventEmitter} from '@angular/core';
import {Contact} from './contact.model';
import {MOCKCONTACTS} from './MOCKCONTACTS';
import { Subject } from 'rxjs';

  @Injectable({
    providedIn: 'root'
})
  export class ContactService {
     private contacts: Contact [] =[];
     contactSelectedEvent = new EventEmitter<Contact>();
    
     contactChangedEvent = new Subject<Contact[]>();
     maxContactId: number;

     constructor() {
        this.contacts = MOCKCONTACTS;
     }

     getContacts(){
       return this.contacts.slice();
     }
     
     getContact(id: string) {
      for(let contact of this.contacts){
        if(contact.id === id){
          return contact;
        }
      }
      return null;
     }

     getMaxId(){
       let maxId = 0;
       for(let contact of this.contacts){
         let currentId = +contact.id;
         if(currentId > maxId){
           maxId = currentId;
         }
       }
       return maxId;
     }

     addDocument(contact: Contact){
       if(!contact){
         return;
       }

       this.maxContactId++;
       contact.id = (this.maxContactId).toString();
       this.contacts.push(contact);
       this.contactChangedEvent.next(this.contacts.slice());
     }


     updateDocument(originalContact: Contact, newContact: Contact){
       if(!originalContact || !newContact){
         return;
       }
       
       let pos = this.contacts.indexOf(originalContact);
       if(pos < 0){
         return;
       }
      
       newContact.id = originalContact.id;
       this.contacts[pos] = newContact;
       this.contactChangedEvent.next(this.contacts.slice());
     }

     
     deleteContact(contact: Contact) {
       if (!contact){
         return;
       }

       const pos = this.contacts.indexOf(contact);
       if(pos < 0) {
         return;
       }

       this.contacts.splice(pos, 1);
       this.contactChangedEvent.next(this.contacts.slice());
     }
     
  }