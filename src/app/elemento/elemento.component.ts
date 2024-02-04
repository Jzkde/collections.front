import { Component, OnInit } from '@angular/core';
import { elemento } from '../models/elemento';
import { ElementosService } from '../service/elementos.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html',
  styleUrls: ['./elemento.component.css']
})
export class ElementoComponent implements OnInit {

  elemento: elemento[] = []
  buscados: any[] = [];
  returnedArray?: any[];
  currentPage: number = 1

  busqueda = {
    nombre: '',
    obs: '',
    descrip: '',
    tipo: '',
    esta: true,
    backup: '',
    borrado: false,
  };

  constructor(
    private elementosService: ElementosService,
  ) { }

  ngOnInit(): void {

    // Obtiene el valor de "tipo" desde otro componente
    this.elementosService.getTipo().subscribe((tipo) => {
      this.busqueda.tipo = tipo;
      this.filtro();
    });
  }

  // Obtiene el total de "elementos" filtrados
  filtro(): void {
    this.elementosService.filtro(this.busqueda).subscribe(
      data => {
        this.buscados = data;
        //console.log(this.buscados.length);
        //console.log(this.busqueda.backup);
        

        // Ordenar los objetos por el atributo "nombre"
        this.buscados.sort((a: any, b: any) => a.nombre.localeCompare(b.nombre));
        //console.log(this.buscados);

        // Seleccionar los primeros 10 "elementos" después de la ordenación
        this.returnedArray = this.buscados.slice(0, 10);
        //console.log(this.returnedArray);
      }
    );
  }

  // Obtiene las imagenes de cada "elemento"
  imagen(imagenPath: String): String {
    return this.elementosService.imagen(imagenPath);
  }

  // Muestra los "elementos" filtrados por "tipo"
  filtrarPorTipo(tipo: string): void {
    this.busqueda.tipo = tipo;
    this.filtro();
    this.currentPage = 1;
  }

  // Cambia la pagina con los proximos 10 "elementos" ordenados
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.buscados.slice(startItem, endItem);
    //console.log(this.returnedArray);

  }
}