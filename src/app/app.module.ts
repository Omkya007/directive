import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirComponent } from './shared/components/dir/dir.component';
import { cssHighlighter } from './shared/directive/cssHiglighter.directive';
import { advanceCss } from './shared/directive/advanceCss.directive';
import { lowerCase } from './shared/directive/lowerCase.directive';
import { appCredit } from './shared/directive/appCredit.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirComponent,
    cssHighlighter,
    advanceCss,
    lowerCase,
    appCredit
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
