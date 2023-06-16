import { Component, OnInit } from '@angular/core';
import { Automotriz } from './automotriz';
import { AutomotrizService } from './automotriz.service';

@Component({
  selector: 'app-automotrices',
  templateUrl: './automotrices.component.html',
  styleUrls: ['./automotrices.component.css']
})
export class AutomotricesComponent implements OnInit {
  titulo:string="Lista de automotrices";
  prueba:string="Esto es una prueba de mi componente de autos";

  automotrices:Automotriz[];

  constructor(private automotrizService:AutomotrizService) {}

  ngOnInit(): void {
    this.automotrizService.getAll().subscribe(
      a =>this.automotrices=a
    );
  }

  delete(automotriz:Automotriz):void{
    console.log("Hello form delete");
    this.automotrizService.delete(automotriz.id).subscribe(
      res=>this.automotrizService.getAll().subscribe(
        response=>this.automotrices=response
      )
    );
  }

}
