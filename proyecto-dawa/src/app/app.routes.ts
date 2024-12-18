import { Routes } from '@angular/router';
import { CrudUsuarioComponent } from './components/crud-usuario/crud-usuario.component';
import { CrudHogarComponent } from './components/crud-hogar/crud-hogar.component';
import { CrudMaterialComponent } from './components/crud-material/crud-material.component';
import { CrudEmpresaComponent } from './components/crud-empresa/crud-empresa.component';
import { CrudRutaComponent } from './components/crud-ruta/crud-ruta.component';

export const routes: Routes = [
    {
        path: 'usuario',
        loadComponent: ()=>
            import('./components/crud-usuario/crud-usuario.component')
            .then(c => c.CrudUsuarioComponent)
    },

    {
        path: 'hogar',
        loadComponent: ()=>
            import('./components/crud-hogar/crud-hogar.component')
            .then(c => c.CrudHogarComponent)
    },

    {
        path: 'material',
        loadComponent: ()=>
            import('./components/crud-material/crud-material.component')
            .then(c => c.CrudMaterialComponent)
    },

    {
        path: 'empresa',
        loadComponent: ()=>
            import('./components/crud-empresa/crud-empresa.component')
            .then(c => c.CrudEmpresaComponent)
    },

    {
        path: 'ruta',
        loadComponent: ()=>
            import('./components/crud-ruta/crud-ruta.component')
            .then(c => c.CrudRutaComponent)
    }
];