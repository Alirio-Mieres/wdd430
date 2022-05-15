import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Documents} from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Documents>();

  documents: Documents[] = [
    new Documents(1, "CIT 260 - Object Oriented Programming", "Document 1", "www.byui.edu", null),
    new Documents(2, "WDD 430 - Web Full Stack Development", "Document 2", "www.byui.edu", null),
    new Documents(3, "CIT 420 - Data Warehousing", "Document 3", "www.byui.edu", null),
    new Documents(4, "CIT 460 - Enterpise Development", "Document 4", "www.byui.edu", null),
    new Documents(5, "CIT 495 - Senior Project", "Document 5", "www.byui.edu", null)
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedDocument(document: Documents){
    this.selectedDocumentEvent.emit(document);
  }

}
