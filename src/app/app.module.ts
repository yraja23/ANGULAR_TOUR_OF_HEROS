import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { Component,Input} from '@angular/core';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FirstComponent } from './first/first.component';
import { MessagesComponent } from './messages/messages.component';
@NgModule({
    declarations: [
        AppComponent,
        FirstComponent,
        MessagesComponent,
        // HeroDetailComponent,
        // HeroesComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HeroesComponent
    ]
})
export class AppModule { }
