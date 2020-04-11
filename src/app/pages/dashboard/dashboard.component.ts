import { Component, OnInit } from '@angular/core';
import { CodaTableConfig, CodaModalService, CodaFormConfig } from 'projects/mobileia/layout-coda/src/public-api';
import { TestService } from 'src/app/services/test.service';
import { dashboardColumns } from './dashbord.columns';
import { dashboardFields } from './dashboard.fields';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tableConfig = new CodaTableConfig();
  formConfig = new CodaFormConfig();

  constructor(
    protected testService: TestService,
    protected modalService: CodaModalService
  ) {
    this.loadTableConfig();
    this.loadFormConfig();
  }

  ngOnInit(): void {
    this.configSelectors();
  }

  configSelectors() {
    this.tableConfig.onChangeField.subscribe(data => {
      console.log(data);
    });
  }

  onClickAdd() {
    this.modalService.openForm({
      title: 'Nuevo cliente',
      form: this.formConfig
    });
  }

  loadTableConfig() {
    this.tableConfig.service = this.testService;
    this.tableConfig.columns = dashboardColumns;
    this.tableConfig.onAfterLoad = (items) => {
      items.forEach(element => {
        element.fullname = element.firstname + ' ' + element.lastname;
      });
      return items;
    };
  }

  loadFormConfig() {
    this.formConfig.fields = dashboardFields;
    this.formConfig.item = {
      name: '',
      latitude: 0,
      longitude: 0
    };
    this.formConfig.onSelectPlace.subscribe(data => {
      this.formConfig.item.latitude = data.place.geometry.location.lat();
      this.formConfig.item.longitude = data.place.geometry.location.lng();
    });
  }
}
