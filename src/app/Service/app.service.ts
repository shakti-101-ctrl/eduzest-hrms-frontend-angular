import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  temp_data : any;
  selectedFile: File | null = null;
  fileName ="";
  username !:string;

  constructor() { }
}
