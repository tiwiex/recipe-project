import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A recipe', 'my first mean is cool', 'https://savorysweetlife.com/wp-content/uploads/2010/03/chicken-marsala-1.jpg' ),
    new Recipe('A recipe', 'my first mean is cool', 'https://savorysweetlife.com/wp-content/uploads/2010/03/chicken-marsala-1.jpg' )
  ];

  constructor() { }

  ngOnInit() {
  }

}
