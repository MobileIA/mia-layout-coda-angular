import { Component, OnInit, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { BaseColumnComponent } from '../base-column/base-column.component';
import { ActionsColumnComponent } from '../actions-column/actions-column.component';
import { Router } from '@angular/router';

@Component({
  selector: 'coda-custom-column',
  templateUrl: './custom-column.component.html',
  styleUrls: ['./custom-column.component.scss']
})
export class CustomColumnComponent extends ActionsColumnComponent implements OnInit {

  @ViewChild('contentColumn') contentColumn: ElementRef;

  constructor(
    protected navigator: Router,
    protected factoryResolver: ComponentFactoryResolver,
    protected viewContainerRef: ViewContainerRef
  ) {
    super(navigator);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.generateComponent();
  }

  generateComponent() {
    const component = this.factoryResolver.resolveComponentFactory(this.column.component);
    
    const view = this.viewContainerRef.createComponent(component);
    (<ActionsColumnComponent>view.instance).column = this.column;
    (<ActionsColumnComponent>view.instance).item = this.item;
    (<ActionsColumnComponent>view.instance).removeItem = this.removeItem;
  }
}
