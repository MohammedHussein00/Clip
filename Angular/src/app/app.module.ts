import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';

import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VideoModule } from './video/video.module';
import { ClipComponent } from './clip/clip.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgxCaptureModule } from 'ngx-capture';
import { ClipsListComponent } from './clips-list/clips-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ClipComponent,
    NotFoundComponent,
    ClipsListComponent,
  ],
  imports: [
    BrowserModule,
    VideoModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    NgxCaptureModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
