import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  // momenteel wordt de data hardcoded opgenomen

  employees: Employee[] = [
    {
      id: 1,
      naam: 'Johan',
      geslacht: 'Man',
      email: 'johan.algoet@pandora.be',
      contactVoorkeur: 'email',
      geboorteDatum: new Date('07/28/1959'),
      departement: 'school',
      isActief: true,
      fotoPath: 'assets/images/johan.png'
    },
    {
      id: 2,
      naam: 'Lyn',
      geslacht: 'Vrouw',
      email: 'lyndelrosario80@gmail.com',
      contactVoorkeur: 'email',
      geboorteDatum: new Date('02/20/1980'),
      departement: 'zwembad',
      isActief: true,
      fotoPath: 'assets/images/lyn.png'
    },
    {
      id: 3,
      naam: 'Tony',
      geslacht: 'Man',
      contactVoorkeur: 'telefoon',
      telefoonNr: '0477/331240',
      geboorteDatum: new Date('04/18/1958'),
      departement: 'infortel',
      isActief: true,
      fotoPath: 'assets/images/tony.png'

  ]

  constructor() { }

  ngOnInit() {
  }

}


