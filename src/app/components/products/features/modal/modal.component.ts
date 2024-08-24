import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Product } from "../../models/product.interface";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() product!: Product;
  @Input() exitModal = (): void => {};
}
