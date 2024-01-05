import { Component, OnInit } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalRef?: BsModalRef;
  faTimes = faTimes;
  
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    
  }

  // Table Modal
  tableModal(exTableModal: any) {
    this.modalRef = this.modalService.show(exTableModal, { class: 'modal-xl modal-dialog-centered' });
  }

  // Craete New Product Label
  accountSettings(createNewProductModal: any){
    this.modalRef = this.modalService.show(createNewProductModal)
  }
}
