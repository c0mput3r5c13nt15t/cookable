import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private headers = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  });
  private options = { this:this.headers, withCredentials: false };
  private api = 'https://5eecf6a5-c61d-482e-b8ea-bea04376ec2b.mock.pstmn.io';

  constructor(private http: HttpClient) { }

  public getRecipes(): Observable<Object> {
    return this.http.get(this.api + '/recipes', this.options);
  }

  public getRecipe(recipeId: number): Observable<Object> {
    return this.http.get(this.api + '/recipe/' + recipeId, this.options);
  }
}
