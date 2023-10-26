import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldService } from './hello-world.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HelloWorldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HelloWorldService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }