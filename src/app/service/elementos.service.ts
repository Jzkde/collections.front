import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { elemento } from '../models/elemento';
import { Busqueda } from '../models/busqueda';

@Injectable({
  providedIn: 'root'
})
export class ElementosService {

  private apiUrl: String = 'http://localhost:8080/elemento';

  constructor(
    private http: HttpClient
  ) { }

  private tipo = new BehaviorSubject<string>('');

  setTipo(tipo: string): void {
    this.tipo.next(tipo)
  }
  getTipo(): BehaviorSubject<string> {
    return this.tipo;
  }

  filtro(busqueda: Busqueda): Observable<any[]> {
    return this.http.post<any[]>(this.apiUrl + `/filtro`, busqueda);
  }

  uno(id: number): Observable<elemento> {
    return this.http.get<elemento>(this.apiUrl + `/uno/${id}`);
  }

  imagen(imagenPath: String): String {
    return this.apiUrl + `/${imagenPath}`;
  }

  nuevo(nombre: string, obs: string, descrip: string, tipo: string, esta: boolean, imagen: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('nombre', nombre);
    formData.append('obs', obs);
    formData.append('descrip', descrip);
    formData.append('tipo', tipo);
    formData.append('esta', String(esta));
    formData.append('imagen', imagen);
    return this.http.post<string>(this.apiUrl + `/nuevo`, formData);
  }

  agregarImagen(id: number, imagenes: File[]): Observable<any> {
    const formData = new FormData();
    formData.append('id', id.toString());

    for (const imagen of imagenes) {
      formData.append('imagen', imagen, imagen.name);
    }
    return this.http.post(`${this.apiUrl}/agregar_img/${id}`, formData);
  }

  editar(id: number, elemento: elemento): Observable<any> {
    return this.http.put(this.apiUrl + `/editar/${id}`, elemento);
  }

  borrarElemento(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + `/borrar/${id}`);
  }
  lista(): Observable<elemento[]> {
    return this.http.get<elemento[]>(this.apiUrl+ '/lista');
  }
}
