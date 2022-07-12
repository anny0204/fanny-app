import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingPathService } from '@routing/services/routing-path.service';
import { CategoriesApiService } from 'src/app/connection/services/categories-api.service';

@Component({
  selector: 'app-categories-list-page',
  templateUrl: './categories-list-page.component.html',
  styleUrls: ['./categories-list-page.component.scss']
})
export class CategoriesListPageComponent implements OnInit {

  public categories: string[];

  public constructor(
    private categoriesApiService: CategoriesApiService,
    private router: Router,
    private routingPathService: RoutingPathService,
  ) { }

  public ngOnInit(): void {
    this.fetchServerData()
  }

  public onCategorySelect(category: string):void {
    void this.router.navigate(this.routingPathService.getJoke(category));
  }

  private fetchServerData(): void {
    this.categoriesApiService.getCategories()
      .subscribe((categories: string[]) => {
        this.categories = categories;
      });
  }

}
