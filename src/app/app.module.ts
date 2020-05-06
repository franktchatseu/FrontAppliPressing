import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieListComponent } from './categorie/categorie-list/categorie-list.component';
import { CategorieAddComponent } from './categorie/categorie-add/categorie-add.component';
import { CategorieEditComponent } from './categorie/categorie-edit/categorie-edit.component';

import { ClientAddComponent } from './client/client-add/client-add.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';

import { RetraitListComponent } from './retrait/retrait-list/retrait-list.component';
import { RecuListComponent } from './recu/recu-list/recu-list.component';
import { VersementAddComponent } from './versement/versement-add/versement-add.component';
import { ConnectionComponent } from './authentication/connection/connection.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableauComponent } from './tableau/tableau.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule, MatDialogModule, MatSidenavModule, MatSelectModule, MatInputModule, MatIconModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DepotListComponent } from './depot/depot-list/depot-list.component';
import { DepotAddComponent } from './depot/depot-add/depot-add.component';
import { DepotDetailComponent } from './depot/depot-detail/depot-detail.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientListDataSource } from './client/client-list/client-list-datasource';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './components/templates/sidebar/sidebar.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { BarreoutilComponent } from './components/templates/barreoutil/barreoutil.component';
import { SignupComponent } from './authentication/signup/signup.component';



const routes:Routes=[
  {path:'',component:ConnectionComponent},
  {path:'home',component:HomeComponent},
  {path:'categorie',component:CategorieListComponent},
  {path:'client',component:ClientListComponent},
  {path:'depot',component:DepotAddComponent},
  {path:'retrait',component:RetraitListComponent},
  {path:'recu',component:RecuListComponent},
  {path:'connection',component:ConnectionComponent},
  {path:'edit_client',component:ClientEditComponent},
  {path:'user',component:SignupComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    CategorieListComponent,
    CategorieAddComponent,
    CategorieEditComponent,
    ClientListComponent,
    ClientAddComponent,
    ClientEditComponent,
    DepotAddComponent,
    DepotDetailComponent,
    DepotListComponent,
    RetraitListComponent,
    RecuListComponent,
    VersementAddComponent,
    ConnectionComponent,
    UserAddComponent,
    UserListComponent,
    HeaderComponent,
    TableauComponent,
    HomeComponent,
    FooterComponent,
    SidebarComponent,
    BarreoutilComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatToolbarModule,
    MatDialogModule,
    MatSidenavModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [ClientAddComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
