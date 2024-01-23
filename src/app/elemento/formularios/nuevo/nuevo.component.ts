import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementosService } from 'src/app/service/elementos.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  nombre: string = '';
  obs: string = '';
  descrip: string = '';
  tipo: string = '';
  esta: boolean = false;
  backup: string = '';
  cod: string = '';
  imagen: File | null = null;

  buscados: any[] = [];

  constructor(
    private elementosService: ElementosService,
    private router: Router) { }
  ngOnInit(): void {
    this.todos();
  }

  crearElemento(): void {
    if (this.nombre && this.obs && this.tipo && this.imagen) {
      this.elementosService.nuevo(this.nombre, this.obs, this.descrip, this.tipo, this.esta, this.backup, this.cod, this.imagen ).subscribe(
        () => {
          // Después de agregar el nuevo elemento, realizar la navegación
          this.router.navigate([`/uno/${this.buscados.length + 1}`]);
        }
      );
    } else {
      console.error('Todos los campos son obligatorios.');
    }
  }

  onFileChange(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.imagen = fileList[0];
    }
  }

  irConTipo(tipo: string): void {
    this.elementosService.setTipo(tipo);
    this.router.navigate(['/']);
  }
  todos(): any {
    this.elementosService.lista().subscribe(
      data => {
        this.buscados = data;
      }
    );
    return this.buscados
  }
}