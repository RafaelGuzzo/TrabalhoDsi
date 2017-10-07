import { Component, OnInit } from '@angular/core';
import { DeletaComponent } from '../deleta/deleta.component';
import { AlteraComponent } from '../altera/altera.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  altera = new AlteraComponent(null)
  deleta = new DeletaComponent()

  public items = [];

  constructor() { }

  ngOnInit() {
    this.carregar();
  }

  public lista(){
    let rem = document.getElementById('table');
    rem.parentNode.removeChild(rem);
    this.carregar();
  }


  public carregar() {
    let url = 'http://localhost:3000/api/buscaTodos';

    fetch(url)
    .then(res => res.json())
    .then((out) =>{
      this.addTable(out);
    })
    .catch(err => console.error(err));
  }


  public addTable(resultado) {

    let table = document.createElement('table');
    table.id = 'table'
    table.className = "table table-striped"

    for(let i = 0; i < resultado.length; i++){

      let child = resultado[i];
      if (i === 0) {
        this.addHeaders(table, Object.keys(child));
      }
      let row = table.insertRow();

      Object.keys(child).forEach(function(k) {
        let cell = row.insertCell();
        cell.appendChild(document.createTextNode(child[k]));
      })

      this.deleta.criaBotaoDeleta(row,child["id"]);
    }
    document.getElementById('tabela').appendChild(table);
  }

  public addHeaders(table, keys) {
    let row = table.insertRow();
    for(let i = 0; i < keys.length; i++){
      let cell = row.insertCell();
      cell.appendChild(document.createTextNode(keys[i]));
    }
    let cell = row.insertCell();
    cell.appendChild(document.createTextNode(""));
  }
}
