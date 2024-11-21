import { AfterViewInit, Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { UsuarioJsonService } from '../../services/usuario-json.service';
import { Usuario } from '../../models/Usuario.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule} from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-crud-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, MatTableModule, MatNativeDateModule],
  templateUrl: './crud-usuario.component.html',
  styleUrl: './crud-usuario.component.css'
})
export class CrudUsuarioComponent implements OnInit, AfterViewInit{
  form!: FormGroup
  isEditMode: boolean = false
  currentId!: number
  dataSource = new MatTableDataSource<Usuario>()
  @ViewChild(MatPaginator) paginador!: MatPaginator
  
  ngAfterViewInit(): void {
    this.dataSource.paginator= this.paginador
  }

  constructor(private usuarioService: UsuarioJsonService, private fb: FormBuilder){

  }
 
  ngOnInit(): void {
    this.obtenerUsuarios()

    this.form =this.fb.group({
      nombre: [""],
      email: [""],
      rol: [""],
      estado: [""]
    })
  }

  obtenerUsuarios(){
    this.usuarioService.obtenerUsuarios().subscribe((data: Usuario[])=>{
        console.log(data)
    })
  }
}
