
import {LayoutComponent} from "../modules/layaut/layout.component";
import {AuthGuard} from "../guards/auth.guard";
import {LoginComponent} from "../modules/login/login.component";
export const routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', loadChildren: './home/home.module#HomeModule'},
      {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
      {path: 'widgets', loadChildren: './widgets/widgets.module#WidgetsModule'},
      {path: 'elements', loadChildren: './elements/elements.module#ElementsModule'},
      {path: 'forms', loadChildren: './forms/forms.module#FormsModule'},
      {path: 'charts', loadChildren: './charts/charts.module#ChartsModule'},
      {path: 'tables', loadChildren: './tables/tables.module#TablesModule'},
      {path: 'maps', loadChildren: './maps/maps.module#MapsModule'},
      {path: 'blog', loadChildren: './blog/blog.module#BlogModule'},
      {path: 'ecommerce', loadChildren: './ecommerce/ecommerce.module#EcommerceModule'},
      {path: 'extras', loadChildren: './extras/extras.module#ExtrasModule'},
      {path: 'employees', loadChildren: './employees/employees.module#EmployeesModule'},
      {path: 'skill', loadChildren: './skills/skill.module#SkillModule'},
      {path:'project',loadChildren:'./projects/project.module#ProjectModule'}
    ]
  },

  // Not lazy-loaded routes
  {path: 'login', component: LoginComponent},


  // Not found
  {path: '**', redirectTo: 'login'}
];
