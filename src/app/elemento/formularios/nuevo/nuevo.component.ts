import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ElementosService } from 'src/app/service/elementos.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {
  nombre: string = '';
  obs: string = '';
  descrip: string = '';
  tipo: string = '';
  esta: boolean = false;
  imagen: File | null = null;

  constructor(
    private elementosService: ElementosService,
    private router: Router) { }

  crearElemento(): void {
    if (this.nombre && this.obs && this.tipo && this.imagen) {
      this.elementosService.nuevo(this.nombre, this.obs, this.descrip, this.tipo, this.esta, this.imagen).subscribe(
      );
    } else {
      console.error('Todos los campos son obligatorios.');
    }
    this.irConTipo('');
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
}