import { Component, OnInit } from '@angular/core';
import { EmpresaJsonService } from '../../services/empresa-json.service';
import { Empresa } from '../../models/Empresa.model';

@Component({
  selector: 'app-crud-empresa',
  standalone: true,
  imports: [],
  templateUrl: './crud-empresa.component.html',
  styleUrl: './crud-empresa.component.css'
})
export class CrudEmpresaComponent implements OnInit{
  constructor(private empresaService: EmpresaJsonService){

  }
  ngOnInit(): void {
    this.obtenerEmpresas()
  }

  obtenerEmpresas(){
    this.empresaService.obtenerEmpresas().subscribe((data: Empresa[])=>{
      console.log(data)
    })
  }

  
}

