import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { AccountComponent } from './account.component';

@NgModule({
    declarations: [
	AppComponent,
	AccountComponent,
	LoginComponent
    ],
    imports: [
	BrowserModule,
	AppRoutingModule,
	ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [
	AppComponent
    ]
})
export class AppModule { }
