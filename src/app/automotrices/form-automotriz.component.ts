import { Component, OnInit } from '@angular/core';
import { Automotriz } from './automotriz';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { AutomotrizService } from './automotriz.service';

@Component({
  selector: 'app-form-automotriz',
  templateUrl: './form-automotriz.component.html',
  styleUrls: ['./form-automotriz.component.css']
})
export class FormAutomotrizComponent implements OnInit{
  automotriz:Automotriz = new Automotriz();
  titulo:string="Registro de Producto";


  constructor(private automotrizService:AutomotrizService, private router:Router, private activatedRoute:ActivatedRoute) {}
  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.automotrizService.get(id).subscribe(
            es=>this.automotriz=es
          );
        }
      }
    );
  }

  create(): void{
    console.log(this.automotriz);
    this.automotrizService.create(this.automotriz).subscribe(
      res=>this.router.navigate(['/automotrices'])
    );
  }

  update():void{
    this.automotrizService.update(this.automotriz).subscribe(
      res=>this.router.navigate(['/automotrices'])
    );
  }
}
