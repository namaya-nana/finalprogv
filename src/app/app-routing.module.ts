import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes 
import { ListarEmpleadoComponent } from './components/listar-empleado/listar-empleado.component';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';

const routes: Routes = [
  { path: '', component: ListarEmpleadoComponent },
  { path: 'crear-empleado', component: CrearEmpleadoComponent },
  { path: 'editar-empleado/:id', component: CrearEmpleadoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
console.log(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
