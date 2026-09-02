import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RoleComponent } from './role/role.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { CollegeComponent } from './college/college.component';
import { UserComponent } from './user/user.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { SubjectComponent } from './subject/subject.component';
import { CourseComponent } from './course/course.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleListComponent } from './role/role-list.component';
import { UserListComponent } from './user/user-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { CourseListComponent } from './course/course-list.component';
import { StudentListComponent } from './student/student-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { AuthServiceService } from './auth-service.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RoleComponent,
    StudentComponent,
    FacultyComponent,
    CollegeComponent,
    UserComponent,
    MarksheetComponent,
    SubjectComponent,
    CourseComponent,
    TimetableComponent,
    DashboardComponent,
    RoleListComponent,
    UserListComponent,
    MarksheetListComponent,
    CollegeListComponent,
    CourseListComponent,
    StudentListComponent,
    SubjectListComponent,
    FacultyListComponent,
    TimetableListComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthServiceService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
