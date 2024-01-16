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

    // Obtiene el valor de tipo desde otro componente
    this.elementosService.getTipo().subscribe((tipo) => {
      this.busqueda.tipo = tipo;
      this.filtro();
    });
  }

  // Obtiene el total de objetos filtrados
  filtro(): void {
    this.elementosService.filtro(this.busqueda).subscribe(
      data => {
        this.buscados = data;
        this.buscados = this.buscados.map((obj: any, i: number) => ({ obj }));
        this.returnedArray = this.buscados.slice(0, 10);      
      }
    );
  }

  // Obtiene las imagenes de cada objeto
  imagen(imagenPath: String): String {
    return this.elementosService.imagen(imagenPath);
  }

  // Muestra los objetos filtrados por "tipo"
  filtrarPorTipo(tipo: string): void {
    this.busqueda.tipo = tipo;
    this.filtro();
  }
  
  // Cambia la pagina
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.buscados.slice(startItem, endItem);  
  }
}