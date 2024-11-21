import { Component, OnInit } from '@angular/core';
import { MaterialJsonService } from '../../services/material-json.service';
import { Material } from '../../models/Material.model';

@Component({
  selector: 'app-crud-material',
  standalone: true,
  imports: [],
  templateUrl: './crud-material.component.html',
  styleUrl: './crud-material.component.css'
})
export class CrudMaterialComponent implements OnInit {
  constructor(private materialService: MaterialJsonService){

  }

  ngOnInit(): void {
    this.obtenerMateriales()
  }

  obtenerMateriales(){
    this.materialService.obtenerMateriales().subscribe((data: Material[])=>{
        console.log(data)
    })
  }


}
