import { Component, Input, inject, TemplateRef } from '@angular/core';
import { Product } from '../../models/product.interface';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { ModalComponent } from '../modal/modal.component';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
  providers: [BsModalService],
})
export class ProductItemComponent {
  @Input() product!: Product;
  modalService = inject(BsModalService);
  private readonly cartService = inject(CartService);
  modalRef?: BsModalRef;

  constructor() { }

  openModal(viewUserTemplate: TemplateRef<any>) {
    if (this.product) {
      this.modalRef = this.modalService.show(viewUserTemplate);
    }
  }

  exitModal = (): void => {
    this.modalRef?.hide();
  }

  addToCart() {        
    this.cartService.addToCart({producto: this.product, cantidad: 1});
  }

  isProductInCart(){
    return (this.cartService.findCartItemById(this.product.id) !== undefined); 
  }
}
