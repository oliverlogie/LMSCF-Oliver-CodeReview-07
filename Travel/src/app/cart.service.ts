import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class CartService {
 items = [];
 constructor() { }

 addToCart(info) {
   this.items.push(info);
 }

 getItems() {
   return this.items;
 }
 clearCart() {
  this.items = [];
  return this.items;
}
}