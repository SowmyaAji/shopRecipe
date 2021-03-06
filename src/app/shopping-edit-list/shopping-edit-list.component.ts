import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingService } from '../shopping-list/shopping.service';

@Component({
  selector: 'app-shopping-edit-list',
  templateUrl: './shopping-edit-list.component.html',
  styleUrls: ['./shopping-edit-list.component.css']
})
export class ShoppingEditListComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;


  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingService.addIngredient(newIngredient);
  };
}

