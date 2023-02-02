import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/organisms/layout/header/header.component';
import { FooterComponent } from './components/organisms/layout/footer/footer.component';
import { ShiftSchedulerComponent } from './pages/shift-scheduler/shift-scheduler.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ThemeService } from './services/theme.service';
import { SchedulerTemplateComponent } from './templates/scheduler-template/scheduler-template.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { InputComponent } from './components/atoms/input/input.component';
import { CardComponent } from './components/atoms/card/card.component';
import { LinkComponent } from './components/atoms/link/link.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShiftSchedulerComponent,
    SchedulerTemplateComponent,
    ButtonComponent,
    InputComponent,
    CardComponent,
    LinkComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
