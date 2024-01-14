import { Component, OnInit } from '@angular/core';
import { elemento } from '../models/elemento';
import { ElementosService } from '../service/elementos.service';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html',
  styleUrls: ['./elemento.component.css']
})
export class ElementoComponent implements OnInit {

  elemento: elemento[] = []
  buscados: any[] = [];

  busqueda = {
    nombre: '',
    obs: '',
    descrip: '',
    tipo: '',
  };



  constructor(
    private elementosService: ElementosService,
  ) { }


  ngOnInit(): void {


    this.elementosService.getTipo().subscribe((tipo) => {
      this.busqueda.tipo = tipo;
      this.filtro();
    });
  }

  filtro(): void {
    this.elementosService.filtro(this.busqueda).subscribe(
      data => {
        this.buscados = data;
      }
    );
  }
  filtrarPorTipo(tipo: string): void {
    this.busqueda.tipo = tipo;
    this.filtro();
  }
  borrarFiltros(): void {
    this.busqueda.nombre = '',
      this.busqueda.tipo = '',
      this.busqueda.obs = ''
    this.filtro();
  }

  imagen(imagenPath: String): String {
    return this.elementosService.imagen(imagenPath);
  }
}