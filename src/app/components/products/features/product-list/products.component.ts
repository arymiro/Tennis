import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.interface';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  public products: Product[] = [];
  private readonly productService = inject(ProductService);  
  
  constructor() { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;      
    });
  }

}
