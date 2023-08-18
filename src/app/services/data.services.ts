import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export class DataService {
  constructor(private httpClient: HttpClient, private url: string) {}

  getAll() {
    return this.httpClient.get(this.url).pipe(catchError(this.handleError));
  }

  getOne(id: string) {
    return this.httpClient
      .get(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
  }

  create(resource: any) {
    return this.httpClient
      .post(this.url, resource)
      .pipe(catchError(this.handleError));
  }

  updateWithPut(resource: any, id: string) {
    return this.httpClient
      .put(`${this.url}/${id}`, resource)
      .pipe(catchError(this.handleError));
  }

  updateWithPatch(resource: any, id: string) {
    return this.httpClient
      .patch(`${this.url}/${id}`, resource)
      .pipe(catchError(this.handleError));
  }

  delete(id: string) {
    return this.httpClient
      .delete(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 404)
      return throwError(() => new Error('No se encontro la ruta'));
    if (error.status === 400)
      return throwError(() => new Error('Peticion incorrecta'));
    return throwError(() => new Error('Sucedio un problema'));
  }
}
