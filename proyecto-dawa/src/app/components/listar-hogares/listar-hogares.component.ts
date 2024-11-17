import { Component } from '@angular/core';
import { Hogar } from '../../models/Hogar';
import { JsondataService } from '../../services/jsondata.service';
import { Material } from '../../models/Material';

@Component({
  selector: 'app-listar-hogares',
  standalone: true,
  imports: [],
  templateUrl: './listar-hogares.component.html',
  styleUrl: './listar-hogares.component.css'
})
export class ListarHogaresComponent {
  title: string = "Listado de Hogares";
  hogares: Hogar[] = [];

  constructor(private miServicio: JsondataService){}

  ngOnInit(){
    this.getHogares();
  }

  getHogares():void{
    this.miServicio.getHogares().subscribe((data: Hogar[])=>{
      this.hogares = data;
      console.log(this.hogares[1])
    })
  }

  trackByMaterialId(index: number, material: Material): number {
    if(typeof material.id === "number"){
      return material.id;
    }
    return -1;
  }
}
