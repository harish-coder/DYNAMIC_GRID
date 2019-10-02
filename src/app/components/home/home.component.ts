import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  dataTableSetting:any={};
  avaliableColumn:any = [];
  visibleColumn:any = [];
  dataList:any = [];

  ngOnInit() {
    this.avaliableColumn= ['reference','initialElement','quantity','elementFinalLabel','incidentFinalLabel','referenceLabel',
    'process','codeRetouche']
    this.visibleColumn=['lineCode','opDeclaration','initialIncident','finalElement','finalIncident','elementLabel','incidentLabel']
    this.dataList = [
      {
        "lineCode": "10DB",
        "opDeclaration": "0987",
        "reference": "0077777777",
        "initialElement": "18DC",
        "initialIncident": "0001",
        "finalElement": "18DC",
        "finalIncident": "0001",
        "jourProd": new Date(1541980800000),
        "quantity": "1",
        "dateCreated": new Date(1558959847000),
        "elementLabel": "CONNECTEUR RCS-800",
        "incidentLabel": "INCIDENT GENERIQUE AUTOCONTROLE",
        "elementFinalLabel": "CONNECTEUR RCS-800",
        "incidentFinalLabel": "INCIDENT GENERIQUE AUTOCONTROLE",
        "referenceLabel": "PAS DE LIBELLE",
        "process": 1,
        "codeRetouche": "PEAD",
        "dateReto": null,
        "codeRetoucheLabel": "PIECES EN ATTENTE DE DECISION",
        "traceability": null,
        "idGravite": "0",
        "indice": "1"
      },
      {
        "lineCode": "10DB",
        "opDeclaration": "0987",
        "reference": "0077777777",
        "initialElement": "00MS",
        "initialIncident": "0004",
        "finalElement": "00MS",
        "finalIncident": "0004",
        "jourProd": 1541980800000,
        "quantity": "1",
        "dateCreated": 1558960430000,
        "elementLabel": "test 3434",
        "incidentLabel": "AVEC BAVURE",
        "elementFinalLabel": "test 3434",
        "incidentFinalLabel": "AVEC BAVURE",
        "referenceLabel": "PAS DE LIBELLE",
        "process": 1,
        "codeRetouche": "PEAD",
        "dateReto": null,
        "codeRetoucheLabel": "PIECES EN ATTENTE DE DECISION",
        "traceability": "13110",
        "idGravite": "0",
        "indice": "1"
      },
      {
        "lineCode": "10DB",
        "opDeclaration": "0987",
        "reference": "0077777777",
        "initialElement": "1009",
        "initialIncident": "0001",
        "finalElement": "1009",
        "finalIncident": "0001",
        "jourProd": 1541980800000,
        "quantity": "1",
        "dateCreated": 1559300389000,
        "elementLabel": "VOLANT MOTEUR",
        "incidentLabel": "INCIDENT GENERIQUE AUTOCONTROLE",
        "elementFinalLabel": "VOLANT MOTEUR",
        "incidentFinalLabel": "INCIDENT GENERIQUE AUTOCONTROLE",
        "referenceLabel": "PAS DE LIBELLE",
        "process": 1,
        "codeRetouche": "PEAD",
        "dateReto": null,
        "codeRetoucheLabel": "PIECES EN ATTENTE DE DECISION",
        "traceability": "7777777777",
        "idGravite": "0",
        "indice": "1"
      },
      {
        "lineCode": "10DB",
        "opDeclaration": "0987",
        "reference": "2547896341",
        "initialElement": "1053",
        "initialIncident": "0001",
        "finalElement": "1053",
        "finalIncident": "0001",
        "jourProd": 1541980800000,
        "quantity": "1",
        "dateCreated": 1559563853000,
        "elementLabel": "PISTON CYLINDRE N 3",
        "incidentLabel": "INCIDENT GENERIQUE AUTOCONTROLE",
        "elementFinalLabel": "PISTON CYLINDRE N 3",
        "incidentFinalLabel": "INCIDENT GENERIQUE AUTOCONTROLE",
        "referenceLabel": "PAS DE LIBELLE",
        "process": 1,
        "codeRetouche": "PEAD",
        "dateReto": null,
        "codeRetoucheLabel": "PIECES EN ATTENTE DE DECISION",
        "traceability": "3221sss",
        "idGravite": "0",
        "indice": "1"
      },
      {
        "lineCode": "10DB",
        "opDeclaration": "0987",
        "reference": "2547896341",
        "initialElement": "1053",
        "initialIncident": "0001",
        "finalElement": "1053",
        "finalIncident": "0001",
        "jourProd": 1541980800000,
        "quantity": "1",
        "dateCreated": 1559568858000,
        "elementLabel": "PISTON CYLINDRE N 3",
        "incidentLabel": "INCIDENT GENERIQUE AUTOCONTROLE",
        "elementFinalLabel": "PISTON CYLINDRE N 3",
        "incidentFinalLabel": "INCIDENT GENERIQUE AUTOCONTROLE",
        "referenceLabel": "PAS DE LIBELLE",
        "process": 1,
        "codeRetouche": "PEAD",
        "dateReto": null,
        "codeRetoucheLabel": "PIECES EN ATTENTE DE DECISION",
        "traceability": "22118888",
        "idGravite": "0",
        "indice": "1"
      },
      {
        "lineCode": "10DB",
        "opDeclaration": "0987",
        "reference": "0077777777",
        "initialElement": "00MS",
        "initialIncident": "0001",
        "finalElement": "00MS",
        "finalIncident": "0001",
        "jourProd": 1541980800000,
        "quantity": "1",
        "dateCreated": 1559568890000,
        "elementLabel": "test 3434",
        "incidentLabel": "INCIDENT GENERIQUE AUTOCONTROLE",
        "elementFinalLabel": "test 3434",
        "incidentFinalLabel": "INCIDENT GENERIQUE AUTOCONTROLE",
        "referenceLabel": "PAS DE LIBELLE",
        "process": 1,
        "codeRetouche": "PEAD",
        "dateReto": null,
        "codeRetoucheLabel": "PIECES EN ATTENTE DE DECISION",
        "traceability": "uu",
        "idGravite": "0",
        "indice": "1"
      },
      {
        "lineCode": "10DB",
        "opDeclaration": "0987",
        "reference": "4843131561",
        "initialElement": "1053",
        "initialIncident": "0001",
        "finalElement": "1053",
        "finalIncident": "0001",
        "jourProd": 1541980800000,
        "quantity": "1",
        "dateCreated": 1559578706000,
        "elementLabel": "PISTON CYLINDRE N 3",
        "incidentLabel": "INCIDENT GENERIQUE AUTOCONTROLE",
        "elementFinalLabel": "PISTON CYLINDRE N 3",
        "incidentFinalLabel": "INCIDENT GENERIQUE AUTOCONTROLE",
        "referenceLabel": "PAS DE LIBELLE",
        "process": 1,
        "codeRetouche": "PEAD",
        "dateReto": null,
        "codeRetoucheLabel": "PIECES EN ATTENTE DE DECISION",
        "traceability": "12121234",
        "idGravite": "0",
        "indice": "1"
      },
      {
        "lineCode": "10DB",
        "opDeclaration": "0987",
        "reference": "0077777777",
        "initialElement": "1053",
        "initialIncident": "0986",
        "finalElement": "1053",
        "finalIncident": "0986",
        "jourProd": 1541980800000,
        "quantity": "1",
        "dateCreated": 1559839862000,
        "elementLabel": "PISTON CYLINDRE N 3",
        "incidentLabel": "MAL LOGE",
        "elementFinalLabel": "PISTON CYLINDRE N 3",
        "incidentFinalLabel": "MAL LOGE",
        "referenceLabel": "PAS DE LIBELLE",
        "process": 1,
        "codeRetouche": "PEAD",
        "dateReto": null,
        "codeRetoucheLabel": "PIECES EN ATTENTE DE DECISION",
        "traceability": "4221zszss",
        "idGravite": "0",
        "indice": "1"
      },
      {
        "lineCode": "10DB",
        "opDeclaration": "0987",
        "reference": "0077777777",
        "initialElement": "18DC",
        "initialIncident": "0001",
        "finalElement": "18DC",
        "finalIncident": "0001",
        "jourProd": 1541980800000,
        "quantity": "88",
        "dateCreated": 1559902549000,
        "elementLabel": "CONNECTEUR RCS-800",
        "incidentLabel": "INCIDENT GENERIQUE AUTOCONTROLE",
        "elementFinalLabel": "CONNECTEUR RCS-800",
        "incidentFinalLabel": "INCIDENT GENERIQUE AUTOCONTROLE",
        "referenceLabel": "PAS DE LIBELLE",
        "process": 1,
        "codeRetouche": "PEAD",
        "dateReto": null,
        "codeRetoucheLabel": "PIECES EN ATTENTE DE DECISION",
        "traceability": "0000test avec Santiago",
        "idGravite": "0",
        "indice": "1"
      },
      {
        "lineCode": "10DB",
        "opDeclaration": "0987",
        "reference": "0077777777",
        "initialElement": "1053",
        "initialIncident": "0986",
        "finalElement": "1053",
        "finalIncident": "0986",
        "jourProd": 1541980800000,
        "quantity": "1",
        "dateCreated": 1560158874000,
        "elementLabel": "PISTON CYLINDRE N 3",
        "incidentLabel": "MAL LOGE",
        "elementFinalLabel": "PISTON CYLINDRE N 3",
        "incidentFinalLabel": "MAL LOGE",
        "referenceLabel": "PAS DE LIBELLE",
        "process": 1,
        "codeRetouche": "PEAD",
        "dateReto": null,
        "codeRetoucheLabel": "PIECES EN ATTENTE DE DECISION",
        "traceability": "0000556",
        "idGravite": "0",
        "indice": "1"
      }
    ];

    this.initDataTableSetting();
  }

  initDataTableSetting(){
    this.dataTableSetting = {
      avaliableColumn : this.avaliableColumn,
      visibleColumn : this.visibleColumn,
      dataList : this.dataList
    };
  }

}
