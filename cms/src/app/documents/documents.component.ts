import { Component, OnInit } from '@angular/core';
import { Documents } from './document.model';

@Component({
  selector: 'cms-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  selectedDocument: Documents;
  constructor() { }

  ngOnInit(): void {
  }

}
