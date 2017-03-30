import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent}  from './app.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PostsComponent} from './post/posts.component';
import {AddUserComponent} from './user/add-user.component';
import {UsersComponent} from './user/users.component';
import {UserFormGuard} from './user/UserFormGuard';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'posts', component: PostsComponent},
    {path: 'users', component: UsersComponent},
    {path: 'users/add', component: AddUserComponent, canDeactivate: [UserFormGuard]},
    {path: '**', redirectTo: '/'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        PostsComponent,
        AddUserComponent,
        UsersComponent
    ],
    bootstrap: [AppComponent],
    providers: [UserFormGuard]
})
export class AppModule {
}
