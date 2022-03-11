import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private env: string;

  constructor(private _http:HttpClient) {
    this.env = environment.APP_URL;
   }

   registerTask(task:any){
    return this._http.post<any>(this.env + 'task/save', task);
   }

   listTask(){
    return this._http.get<any>(this.env + 'task/list');
   }
   updateTask(task:any){
    return this._http.put(this.env+'task/update',task);
  }
  deleteTask(task:any){
    return this._http.delete(this.env+'task/delete/'+task._id);
  }
}
