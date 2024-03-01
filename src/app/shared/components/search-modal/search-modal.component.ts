import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.css']
})
export class SearchModalComponent implements OnInit {

  @Input() data: any;
  fromSearchTxt = '';
  toSearchTxt = '';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {}

  onDismiss() {
    this.activeModal.close();
  }

  onSearch() {
    this.activeModal.close({
      fromSearch: this.fromSearchTxt,
      toSearch: this.toSearchTxt
    });
  }
}
