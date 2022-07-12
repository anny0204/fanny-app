import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CATEGORIES } from '@routing/const/routing.conts';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokesRoutingModule { }
