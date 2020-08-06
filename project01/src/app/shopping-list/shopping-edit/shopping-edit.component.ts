import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
   @ViewChild('nameInput')nameInput:ElementRef
   @ViewChild('amountInput')amountInput:ElementRef
  
  constructor( private shoppingList:ShoppingListService) { }

  ngOnInit(): void {
  }
  add(){
    
    const ingName= this.nameInput.nativeElement.value
    const ingamount=this.amountInput.nativeElement.value
    const newIngredient= new Ingredient(ingName,ingamount)
    this.shoppingList.addIngredient(newIngredient)
    
  }
}
