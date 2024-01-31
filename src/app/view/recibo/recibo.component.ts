import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recibo',
  standalone: true,
  imports: [],
  templateUrl: './recibo.component.html',
  styleUrl: './recibo.component.css'
})
export class ReciboComponent implements OnInit{
 // pagamento!: number;
  //tempo!: number;

  public tempo: number;
  public pagamento: number;
  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    //this.tempo = this.route.snapshot.queryParams['idTempo'];
    //this.pagamento = this.route.snapshot.queryParams['idPagamento'];

    this.tempo = this.route.snapshot.paramMap.get('idTempo');
    this.pagamento = this.route.snapshot.paramMap.get('pagamento');
  }
}


