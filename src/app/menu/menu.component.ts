import { Component, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() abrir = false;
  @Output() enviar = new EventEmitter();

  constructor(){}

  funcion(){
    if(this.abrir==false){
      this.abrir=true
    }else{
      this.abrir=false
    }
    this.enviar.emit(this.abrir);
  }
}
