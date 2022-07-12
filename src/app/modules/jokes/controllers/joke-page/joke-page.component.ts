import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORY_NAME } from '@routing/const/routing.conts';
import { RoutingPathService } from '@routing/services/routing-path.service';
import { JokeModel } from 'src/app/connection/models/joke.model';
import { JokesApiService } from 'src/app/connection/services/jokes-api.service';
import { ActivatedRouteHelper } from 'src/app/shared/helpers/activated-route.helper';

@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.component.html',
  styleUrls: ['./joke-page.component.scss']
})
export class JokePageComponent implements OnInit {

  public joke: JokeModel;

  private categoryName: string;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private jokesApiService: JokesApiService,
    private router: Router,
    private routingPathService: RoutingPathService,
  ) { }

  public ngOnInit(): void {
    this.categoryName = this.handleCategoryNameFromUrlParams();
    
    this.fetchServerData();
  }

  public getAnotherOne(): void {
    this.fetchServerData();
  }

  public goBack(): void {
    void this.router.navigate(this.routingPathService.getCategories());
  }

  private fetchServerData(): void {
    this.jokesApiService.getJoke(this.categoryName)
      .subscribe((joke: any) => {
        this.joke = joke;
      });
  }

  private handleCategoryNameFromUrlParams(): string {
    return ActivatedRouteHelper.getParamFromActivatedRoute(this.activatedRoute, CATEGORY_NAME)!;
  }

}
