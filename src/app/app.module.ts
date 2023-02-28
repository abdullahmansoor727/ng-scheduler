import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/organisms/layout/header/header.component';
import { FooterComponent } from './components/organisms/layout/footer/footer.component';
import { ShiftSchedulerComponent } from './pages/shift-scheduler/shift-scheduler.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ThemeService } from './services/theme/theme.service';
import { SchedulerTemplateComponent } from './templates/scheduler-template/scheduler-template.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { InputComponent } from './components/atoms/input/input.component';
import { CardComponent } from './components/atoms/card/card.component';
import { LinkComponent } from './components/atoms/link/link.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ResourceListComponent } from './components/organisms/resource-list/resource-list.component';
import { ShiftResourceItemComponent } from './components/organisms/shift-resource-item/shift-resource-item.component';
import { ShiftResourceCtaComponent } from './components/organisms/shift-resource-cta/shift-resource-cta.component';
import { LoaderComponent } from './components/atoms/loader/loader.component';
import { ScheduleOutputComponent } from './components/organisms/schedule-output/schedule-output.component';
import { ResourceService } from './services/resource/resource.service';
import { DayOfWeekPipe } from './pipes/dateTime/day-of-week.pipe';
import { SortWeekPipe } from './pipes/dateTime/sort-week.pipe';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shift-scheduler', component: ShiftSchedulerComponent },
];
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
    HomeComponent,
    ResourceListComponent,
    ShiftResourceItemComponent,
    ShiftResourceCtaComponent,
    LoaderComponent,
    ScheduleOutputComponent,
    DayOfWeekPipe,
    SortWeekPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ThemeService, ResourceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
