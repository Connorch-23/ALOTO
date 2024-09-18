import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Aloto - Home Page'
    },
    {
        path: 'calendar',
        component: CalendarComponent,
        title: 'Aloto - Event Calendar'
    }
];
