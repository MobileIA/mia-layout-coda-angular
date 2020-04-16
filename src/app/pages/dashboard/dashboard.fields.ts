import { CodaFieldConfig } from 'projects/mobileia/layout-coda/src/lib/entities/coda-field-config';

export const dashboardFields: CodaFieldConfig[] = [
  {
    type: 'string',
    key: 'firstname',
    title: 'Nombre'
  },
  {
    type: 'string',
    key: 'lastname',
    title: 'Apellido'
  },/*
      {
        type: 'row',
        key: 'row_1',
        title: '',
        children: [
          {
            type: 'string',
            key: 'title',
            title: 'Titulo'
          },
          {
            type: 'string',
            key: ['category', 'name'],
            title: 'Categoria'
          }
        ]
      },
      {
        type: 'row',
        key: 'row_2',
        title: '',
        children: [
          {
            type: 'address',
            key: 'address',
            title: 'Dirección'
          },
          {
            type: 'string',
            key: 'city',
            title: 'Ciudad'
          }
        ]
      },
      
      {
        type: 'select',
        key: 'status',
        title: '¿Estado?',
        caption: '',
        options: [
          {
            title: 'SI',
            value: 1
          },
          {
            title: 'NO',
            value: 0
          }
        ]
      },
      {
        type: 'file',
        key: 'url_file',
        title: 'Archivo',
        caption: '',
        required: true,
        //serviceFile: this.fileService
      },*/
];