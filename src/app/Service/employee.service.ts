import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BranchModel } from '../Model/Employee';
import { Observable } from 'rxjs';
import { CudResponse, GetResponse } from '../Model/Response';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  host : string = "";
  
  constructor(private httpClient : HttpClient) 
  {
    this.host = environment.host;
  }
  //Brach
  getAllBrances() : Observable<GetResponse>
  {
    return this.httpClient.get<GetResponse>(`${this.host + "branch/getbranches"}`);
  }
  saveBranch(data : BranchModel) : Observable<GetResponse>
  {
    return this.httpClient.post<GetResponse>(`${this.host + "branch/postbranch"}`,data);
  }
  updateBranch(data:BranchModel) : Observable<GetResponse>
  {
    let id:any=data.branchId;
    debugger;
    return this.httpClient.put<GetResponse>(`${this.host + "branch/putbranch/"+id}`,data);
  }
  getBranchById(id : string) : Observable<GetResponse>
  {
    return this.httpClient.get<GetResponse>(`${this.host + "branch/deletebranch/" + id}`);
  }

  deleteBranch(id : string) : Observable<GetResponse>
  {
    return this.httpClient.delete<GetResponse>(`${this.host + "branch/deletebranch/"+id}`);
  }
}
