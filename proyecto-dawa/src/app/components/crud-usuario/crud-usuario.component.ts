import { AfterViewInit, Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { UsuarioJsonService } from '../../services/usuario-json.service';
import { Usuario } from '../../models/Usuario.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule} from '@angular/material/table'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-crud-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, MatTableModule, MatNativeDateModule, MatFormFieldModule, MatPaginator],
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

  eliminar(usuario:Usuario){
    this.usuarioService.eliminarUsuario(usuario).subscribe(()=>{
      alert("Eliminado exitosamente.")
      this.obtenerUsuarios();
    })
  }

  editar(usuario:Usuario){
    this.isEditMode = true;

    if(usuario && usuario.id){
      this.currentId = usuario.id;
    }
    else{
      console.log("Usuario o el id del usuario estan undefined")
    }
  }
}
