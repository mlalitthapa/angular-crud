import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './post/posts.component';
import { UsersComponent } from './user/users.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports:      [ 
    RouterModule.forRoot(appRoutes),
    BrowserModule 
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PostsComponent,
    UsersComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
