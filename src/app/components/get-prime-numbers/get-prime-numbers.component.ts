import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { PrimeNumbersService } from '../../prime-numbers.service';
@Component({
  selector: 'app-prime-numbers',
  templateUrl: './get-prime-numbers.component.html',
  styleUrls: ['./get-prime-numbers.component.css']
})
export class PrimeNumbersComponent {
  PrimeNumbers: any = [];
  ErrorMessage: any = [];


  constructor(
    public primeNumbersService: PrimeNumbersService
  ){ }
   
  
   loadPrimeNumbers(primeNumbersUpTo: number) {
    return this.primeNumbersService.GetPrimeNumbers(primeNumbersUpTo).subscribe((data: {}) => {
      this.PrimeNumbers = data;
      this.ErrorMessage = catchError;
    })
  }
}

