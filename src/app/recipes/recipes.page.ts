import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes:Recipe[] = [
    {
      id : "brideshwara",
      title: "temple",
      imageUrl:"https://www.hinduamerican.org/wp-content/uploads/2020/06/20120510012-scaled.jpg",
      ingredients:['frech fries','potato chips','pork fry']
    },
    {
      id : "kali",
      title: "mandapam",
      imageUrl:"https://images.sadhguru.org/sites/default/files/media_files/61353-why-were-temples-built.jpg",
      ingredients:['frech fries','potato chips','pork fry']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
