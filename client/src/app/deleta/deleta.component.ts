import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deleta',
  templateUrl: './deleta.component.html',
  styleUrls: ['./deleta.component.css']
})
export class DeletaComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }


  public criaBotaoDeleta(row, id){
    let url = "http://localhost:3000/api/atleta/"+id
    let cell = row.insertCell();
    let botao = document.createElement('button');
    let span = document.createElement('span');

    span.className = "glyphicon glyphicon-remove"

    botao.id = "excluir"
    botao.className = "btn btn-default btn-lg"

    botao.appendChild(span)

    botao.onclick = function () {

      if (confirm('Deseja realmente deletar este registro?')) {
        alert('O registro foi deletado!');
        fetch(url);
      } else {
        alert('O registro não foi deletado');
      }
      window.location.reload()
    };

    cell.appendChild(botao);
  }

}
