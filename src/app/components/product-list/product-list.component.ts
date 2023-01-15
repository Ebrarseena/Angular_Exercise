import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productName : any;
  constructor(
    private productService : ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProducts().subscribe((res) => {
      console.log(res);
      this.productName = res;
    });
  }
}
