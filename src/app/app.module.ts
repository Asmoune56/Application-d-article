import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CommentsModule } from './comments/comments.module';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostFormComponent } from './pages/post-form/post-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PostDetailComponent,
    PostListComponent,
    NavbarComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommentsModule,
    HttpClientModule
    
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }