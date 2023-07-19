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
  getAllBrances() : Observable<GetResponse<BranchModel>>
  {
    return this.httpClient.get<GetResponse<BranchModel>>(`${this.host + "branch/getbranches"}`);
  }
  saveBranch(data : BranchModel) : Observable<CudResponse<BranchModel>>
  {
    return this.httpClient.post<CudResponse<BranchModel>>(`${this.host + "postbranch"}`,data);
  }
  updateBranch(id : string,data:BranchModel) : Observable<CudResponse<BranchModel>>
  {
    return this.httpClient.put<CudResponse<BranchModel>>(`${this.host + "putbranch/"+id}`,data);
  }
  getBranchById(id : string) : Observable<CudResponse<BranchModel>>
  {
    return this.httpClient.get<CudResponse<BranchModel>>(`${this.host + "deletebranch/" + id}`);
  }
  
}
