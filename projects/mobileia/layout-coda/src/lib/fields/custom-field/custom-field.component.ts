import { Component, OnInit, ComponentFactoryResolver, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { BaseFieldComponent } from '../base-field/base-field.component';
import { StringFieldComponent } from '../string-field/string-field.component';

@Component({
  selector: 'coda-custom-field',
  templateUrl: './custom-field.component.html',
  styleUrls: ['./custom-field.component.scss']
})
export class CustomFieldComponent extends BaseFieldComponent implements OnInit {

  @ViewChild('contentHtml') contentHtml: ElementRef;

  constructor(
    private factoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.generateComponent();
  }

  generateComponent() {
    const component = this.factoryResolver.resolveComponentFactory(this.field.component);
    
    const view = this.viewContainerRef.createComponent(component);
    (<BaseFieldComponent>view.instance).field = this.field;
    (<BaseFieldComponent>view.instance).item = this.item;
  }
}
