import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef  } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  currentSender = "Alirio Mieres";
  @ViewChild('subject', {static: false}) subjectRef: ElementRef;
  @ViewChild('msgText', {static:false}) messageRef: ElementRef;
  @Output() messageAdded = new EventEmitter<Message>();
  

  constructor() { }

  ngOnInit(): void {
  }

  onSendMessage() {
    const msgSubject = this.subjectRef.nativeElement.value;
    const msgMessage = this.messageRef.nativeElement.value;
    const newMessage = new Message(1, msgSubject, msgMessage, this.currentSender);
    this.messageAdded.emit(newMessage);
  }

  onClear() {
    this.subjectRef.nativeElement.value = '';
    this.messageRef.nativeElement.value = '';
  }
}