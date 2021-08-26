import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FcgTemplateComponent} from "./_fcg-form/fcg-template/fcg-template.component";
import {HomeComponent} from "./_page/home/home.component";

const routes: Routes = [
  {path: 'template/:id', component: FcgTemplateComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
