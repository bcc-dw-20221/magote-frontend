import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { StoreModule } from '@ngrx/store';
import { AppReducer } from './store/magote.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './store/login/login.effects';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([LoginEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
