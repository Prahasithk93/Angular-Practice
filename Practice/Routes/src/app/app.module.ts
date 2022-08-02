import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutesComponent } from './routes/routes.component';
import { PipesComponent } from './pipes/pipes.component';
import { HomeComponent } from './home/home.component';
import { GuardService } from './guard.service';
import { authService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
    PipesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GuardService,authService],
  bootstrap: [AppComponent]
})
export class AppModule { }
