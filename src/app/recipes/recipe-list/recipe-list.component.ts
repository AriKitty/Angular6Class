import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Tacos',
      'Delicious, simple mexican dish.',
      'https://1m8t7f33dnra3sfk6v2rjurs-wpengine.netdna-ssl.com/wp-content/uploads/2014/05/20160324-Classic-Tacos-4.jpg'),
    new Recipe(
      'Pot roast',
      'Hearty roast with veggies.',
      'https://www.cscassets.com/recipes/wide_cknew/wide_25699.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
