import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateComponent } from './pages/create/create.component';
import { PresetDetailComponent } from './pages/preset-detail/preset-detail.component';
import { ImportExportComponent } from './pages/import-export/import-export.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create', component: CreateComponent },
  { path: 'preset/:id', component: PresetDetailComponent },
  { path: 'import-export', component: ImportExportComponent },
];
