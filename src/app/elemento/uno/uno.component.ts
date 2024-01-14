import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { elemento } from 'src/app/models/elemento';
import { ElementosService } from 'src/app/service/elementos.service';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {

  elemento!: elemento
  modalRef?: BsModalRef;
  id = this.activatedRoute.snapshot.params['id'];
  imagenes: File[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private elementosService: ElementosService,
    private router: Router,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {

    this.elemento = {
      nombre: '',
      descrip: '',
      obs: '',
      tipo: '',
      caratula: '',
    }

    this.elementosService.uno(this.id).subscribe(
      data => {
        this.elemento = data;
      }
    );
  }


  imagen(imagenPath: String): String {
    return this.elementosService.imagen(imagenPath);
  }

  irConTipo(tipo: string): void {
    this.elementosService.setTipo(tipo);
    this.router.navigate(['/']);
  }
  borrar(id: number) {
    this.elementosService.borrarElemento(id).subscribe()
    this.modalRef?.hide();
    this.irConTipo('');
  }
  decline(): void {
    this.modalRef?.hide();
  }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.imagenes = Array.from(event.target.files) as File[];
    } else {
      console.error('No se han seleccionado archivos.');
    }
  }

  agregarImagen(): void {
    this.elementosService.agregarImagen(this.id, this.imagenes).subscribe();
    this.modalRef?.hide();
  }
}


