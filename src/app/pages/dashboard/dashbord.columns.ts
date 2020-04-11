import { CodaColumnConfig } from 'projects/mobileia/layout-coda/src/lib/entities/coda-column-config';

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
        title: 'Name',
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
        title: 'Estado',
        options: [
          { value: 0, title: 'Pendiente'},
          { value: 1, title: 'Activo'},
        ]
      },
      {
        key: 'actions',
        type: 'actions',
        title: 'Acciones',
        fields_url: ['id'],
        options: [
          { url: '/product-edit/:id', title: 'Edit' },
          { icon: 'home', url: '/product-archive/:id', title: 'Archive' },
        ]
      }
];