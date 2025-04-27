import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostFormComponent } from './pages/post-form/post-form.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'articles', component: PostListComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'article/:id', component: PostDetailComponent },
  { path: 'add-article', component: PostFormComponent }


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
