import { NgIfContext } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
productName: any;
 

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productName = this.productService.productName;
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(res =>{console.log(res)
    this.productName
    })
  }
}



