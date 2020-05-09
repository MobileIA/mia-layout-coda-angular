import { CodaColumnConfig } from 'projects/mobileia/layout-coda/src/lib/entities/coda-column-config';
import { Subject } from 'rxjs';
import { TestColumnComponent } from 'src/app/columns/test-column/test-column.component';

export const dashboardColumns: CodaColumnConfig[] = [
    {
        key: 'checkbox',
        field_key: '',
        type: 'checkbox',
        title: ''
      },
      {
        key: 'date',
        field_key: 'created_at',
        type: 'date',
        title: 'Date'
      },
      {
        key: 'photo',
        field_key: 'firstname',
        field_key_photo: 'photo',
        type: 'photo',
        title: 'Photo & Name',
        is_order: true
      },
      {
        key: 'name',
        field_key: 'lastname',
        type: 'link',
        title: 'Categoria',
        url: '/category/:id',
        fields_url: ['id'],
        is_order: true,
      },
      {
        key: 'title_two2',
        field_key: 'lastname',
        type: 'string',
        title: 'Titulo',
        colors: {
          0: 'red',
          1: 'blue',
          'Camiletti': 'green'
        }
      },
      {
        key: 'title',
        field_key: 'status',
        type: 'string',
        title: 'Titulo',
        colors: {
          0: 'red',
          1: 'blue',
          2: 'green'
        }
      },
      /*{
        key: 'status_opt',
        field_key: 'status',
        type: 'option',
        title: 'Default',
        options: [
          { title: 'Make default', type: 'button' },
          { title: 'Yes' },
          { title: 'No' }
        ]
      },
      {
        key: 'roles',
        field_key: 'roles',
        type: 'multi-option',
        title: 'Roles',
        options: {
          0: { title: 'Admin' },
          1: { title: 'Crew' },
          2: { title: 'Sales' }
        }
      },*/
      {
        key: 'price',
        field_key: 'price',
        type: 'money',
        title: 'Total'
      },
      {
        key: 'custom',
        field_key: 'custom',
        type: 'custom',
        title: 'Test',
        component: TestColumnComponent
      },
      {
        key: 'status',
        field_key: 'status',
        type: 'select',
        title: 'Assign to',
        options: [
          { title: 'Assign to'},
          { value: 0, title: 'Cristian Fittipaldi'},
          { value: 1, title: 'Jim Morrison'},
        ]
      },
      {
        key: 'actions2',
        type: 'actions',
        title: 'Acciones',
        fields_url: ['id'],
        options: [
          { icon: 'create', subject: new Subject<any>(), title: 'Edit', classes: 'icon-edit' },
          //{ icon: 'delete_outline', url: '/product-archive/:id', title: 'Archive', classes: 'icon-delete', if_key: 'has_delete' },
          { type: 'delete', title: 'Delete' }
        ]
      },
      /*{
        key: 'actions',
        type: 'actions-list',
        title: 'Acciones',
        fields_url: ['id'],
        options: [
          { subject: new Subject<any>(), title: 'Edit' },
          { icon: 'home', url: '/product-archive/:id', title: 'Archive' },
          { icon: 'remove', type: 'delete', title: 'Delete' },
        ]
      }*/
];