import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:"about", component: AboutComponent},
  {path:"projects", component: ProjectsComponent},
  {path:"blogs", component: BlogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
