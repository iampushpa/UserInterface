import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookADemoComponent } from './book-a-demo/book-a-demo.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
