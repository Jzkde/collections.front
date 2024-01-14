import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { elemento } from 'src/app/models/elemento';
import { ElementosService } from 'src/app/service/elementos.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  elemento!: elemento

  constructor(

    private elementosService: ElementosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {

    this.elemento = {
      nombre: '',
      descrip: '',
      obs: '',
      tipo: '',
      caratula: '',
    }

    const id = this.activatedRoute.snapshot.params['id'];
    this.elementosService.uno(id).subscribe(
      data => {
        this.elemento = data;
      });
  }

  editar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.elementosService.editar(id, this.elemento).subscribe(
      this.volver
    );
  }

  imagen(imagenPath: String): String {
    return this.elementosService.imagen(imagenPath);
  }

  volver(): void {
    window.history.back();
  }

  irConTipo(tipo: string): void {
    this.elementosService.setTipo(tipo);
    this.router.navigate(['/']);
  }
}
