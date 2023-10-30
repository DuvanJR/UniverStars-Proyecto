import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyLoginComponent } from 'src/home/my-login/my-login.component';
import { MyHomeComponent } from 'src/home/my-home/my-home.component';
import { SharedModule } from './shared/shared.module';
import { ContenedorComponentComponent } from './ContenedorComponent/ContenedorComponent.component';


@NgModule({
  declarations: [		
    AppComponent,
    MyLoginComponent, 
    MyHomeComponent,
      ContenedorComponentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
