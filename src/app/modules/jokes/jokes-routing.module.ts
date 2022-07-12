import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CATEGORIES, CATEGORY_NAME, JOKE } from '@routing/const/routing.conts';

const routes: Routes = [
  {
    path: '',
    redirectTo: CATEGORIES,
    pathMatch: 'full',
  },
  {
    path: CATEGORIES,
    loadChildren: () => import('./controllers/categories-list-page/categories-list-page.module')
        .then((m) => m.CategoriesListPageModule)
  },
  {
    path: `${JOKE}/:${CATEGORY_NAME}`,
    loadChildren: () => import('./controllers/joke-page/joke-page.module')
        .then((m) => m.JokePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokesRoutingModule { }
