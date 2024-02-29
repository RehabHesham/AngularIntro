import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/Day1/navBar/navBar.component';
import { FooterComponent } from './components/Day1/footer/footer.component';
import { AsideComponent } from './components/Day1/aside/aside.component';
import { HomeComponent } from './components/Day1/home/home.component';
import { BindingComponent } from './components/Day2/binding/binding.component';
import { TwoWayBindingManualComponent } from './components/Day2/two-way-binding-manual/two-way-binding-manual.component';
import { TwoWayBindingWithFormsModuleComponent } from './components/Day2/two-way-binding-with-forms-module/two-way-binding-with-forms-module.component';
import { DirectivesComponent } from './components/Day2/directives/directives.component';
import { TodoListComponent } from './components/Day2/todo-list/todo-list.component';
import { FormWithValidationComponent } from './components/Day2/form-with-validation/form-with-validation.component';
import { SliderComponent } from './components/Day2/slider/slider.component';
import { ParentComponent } from './components/Day3/parent/parent.component';
import { ChildComponent } from './components/Day3/child/child.component';
import { StudentsComponent } from './components/Day3/ParentChildExample/students/students.component';
import { StudentDetailsComponent } from './components/Day3/ParentChildExample/student-details/student-details.component';
import { SourceChildComponent } from './components/Day3/source-child/source-child.component';
import { TargetChildComponent } from './components/Day3/target-child/target-child.component';
import { ReactiveFormsComponent } from './components/Day3/reactive-forms/reactive-forms.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// @FunctionName()    => decorators
@NgModule({
  declarations: [
    // register for components, directives,  and pipes declared by this module only
    AppComponent,
    NavBarComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    BindingComponent,
    TwoWayBindingManualComponent,
    TwoWayBindingWithFormsModuleComponent,
    DirectivesComponent,
    TodoListComponent,
    FormWithValidationComponent,
    SliderComponent,
    ParentComponent,
    ChildComponent,
    StudentsComponent,
    StudentDetailsComponent,
    SourceChildComponent,
    TargetChildComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    // register for related modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // registration  of services used that can be injected anywhere in
  ],
  bootstrap: [AppComponent], // first component to run
})
export class AppModule {}
