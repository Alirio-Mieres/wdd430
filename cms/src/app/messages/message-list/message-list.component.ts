import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  
  messages: Message[] = [
    new Message(1, 'Steven Johnson', 'The grades for this assignment have been posted', 'Bro. Jackson'),
    new Message(1, 'Bro. Jackson', 'When is assignment 3 due', 'Steven Johnson'),
    new Message(1, 'Mark Smith', 'Assignment 3 is due on Saturday at 11:30 pm', 'Bro. Jackson')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }

}

