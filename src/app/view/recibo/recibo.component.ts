import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {PagamentoService} from "../../service/pagamento/pagamento.service";
import {TempoService} from "../../service/tempo/tempo.service";
import {CondutorService} from "../../service/condutor/condutor.service";
import {VeiculoService} from "../../service/veiculo/veiculo.service";
import {Pagamento} from "../../model/pagamento/pagamento";
import {Tempo} from "../../model/tempo/tempo";
import {Condutor} from "../../model/condutor/condutor";
import {Veiculo} from "../../model/veiculo/veiculo";


@Component({
  selector: 'app-recibo',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './recibo.component.html',
  styleUrl: './recibo.component.css'
})
export class ReciboComponent implements OnInit {

  pagamentoId!: number;
  pagamento: Pagamento = new Pagamento();
  tempo: Tempo = new Tempo();
  condutor: Condutor = new Condutor();
  veiculo: Veiculo = new Veiculo();

  constructor(
      private route: ActivatedRoute,
      private service: PagamentoService,
      private tempoService: TempoService,
      private condutorService: CondutorService,
      private pagamentoService: PagamentoService,
      private veiculoService: VeiculoService,

  ) {

  }
   ngOnInit(): void {
    this.pagamentoId= +(this.route.snapshot.paramMap.get("id") || 0);
       this.getPagamento();
       this.getTempo();
       this.getVeiculo();
       this.getCondutor();
    }

    getPagamento() {
        this.pagamentoService.getAll().subscribe({
            next: (response) => {
                this.pagamento = response.find((c) => c.id == this.pagamentoId)!;
            },
            error: (responseError) => {
                console.log("error: " + JSON.stringify(responseError));
            },
        });
    }

    getTempo() {
        this.tempoService.getAll().subscribe({
            next: (response) => {
                this.tempo = response.find((c) => c.id == this.pagamento.tempoId)!;
            },
            error: (responseError) => {
                console.log("error: " + JSON.stringify(responseError));
            },
        });
    }

    getCondutor() {
        this.condutorService.getAll().subscribe({
            next: (response) => {
                this.condutor = response.find((c) => c.id == this.tempo.condutor)!;
            },
            error: (responseError) => {
                console.log("error: " + JSON.stringify(responseError));
            },
        });
    }

    getVeiculo() {
        this.veiculoService.getAll().subscribe({
            next: (response) => {
                this.veiculo = response.find((c) => c.id == this.tempo.veiculo)!;
            },
            error: (responseError) => {
                console.log("error: " + JSON.stringify(responseError));
            },
        });
    }

}