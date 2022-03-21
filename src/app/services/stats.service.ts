import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Stats } from '../interfaces/stats';
import { MutationsDna } from '../interfaces/mutations-dna';
import { api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  getStats(): Observable<Stats>{
    return this.http.get<Stats>(api + '/stats')
  }

  getList(): Observable<[MutationsDna]>{
    return this.http.get<[MutationsDna]>(api + '/list')
  }
}
