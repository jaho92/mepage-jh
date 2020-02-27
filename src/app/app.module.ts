import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule , Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent} from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SplashComponent } from './splash/splash.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';

const appRoutes : Routes = [
  //{ path: '**', component:PageNotFoundComponent},
  { path: '', component:SplashComponent},
  { path: 'work', component:WorkComponent},
  { path: 'skills', component:SkillsComponent},
  { path: 'contact', component:ContactComponent},
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes, {enableTracing:true}) ],
  declarations: [ AppComponent, NavBarComponent, PageNotFoundComponent, SplashComponent, SkillsComponent, ContactComponent, WorkComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
