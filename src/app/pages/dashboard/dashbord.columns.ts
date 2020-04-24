import { CodaColumnConfig } from 'projects/mobileia/layout-coda/src/lib/entities/coda-column-config';
import { Subject } from 'rxjs';

export const dashboardColumns: CodaColumnConfig[] = [
    {
        key: 'checkbox',
        field_key: '',
        type: 'checkbox',
        title: ''
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
        is_order: true
      },
      {
        key: 'title',
        field_key: 'title',
        type: 'string',
        title: 'Titulo'
      },
      {
        key: 'price',
        field_key: 'price',
        type: 'money',
        title: 'Total'
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
          { icon: 'delete_outline', url: '/product-archive/:id', title: 'Archive', classes: 'icon-delete' },
        ]
      },
      {
        key: 'actions',
        type: 'actions-list',
        title: 'Acciones',
        fields_url: ['id'],
        options: [
          { subject: new Subject<any>(), title: 'Edit' },
          { icon: 'home', url: '/product-archive/:id', title: 'Archive' },
          { icon: 'remove', type: 'delete', title: 'Delete' },
        ]
      }
];