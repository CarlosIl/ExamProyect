import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  { path: '', component:HomeComponent,
  children: [{ path:'sidenav', component: SidenavComponent}],
  },
  { path: 'home', component:HomeComponent,
  children: [{ path:'sidenav', component: SidenavComponent}],},
  { path: 'gallery', component:GalleryComponent,
  children: [{ path:'sidenav', component: SidenavComponent}],}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
