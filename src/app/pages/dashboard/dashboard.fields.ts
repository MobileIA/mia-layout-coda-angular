import { CodaFieldConfig } from 'projects/mobileia/layout-coda/src/lib/entities/coda-field-config';

export const dashboardFields: CodaFieldConfig[] = [

  {
    type: 'row',
    key: 'row_1',
    title: '',
    children: [
      {
        type: 'string',
        key: 'firstname',
        title: 'First Name',
        placeholder: 'Axel',
        icon: 'person_outline',
        classes: 'asd'
      },
      {
        type: 'string',
        key: 'lastname',
        title: 'Last Name',
        placeholder: 'Camiletti',
      }
    ]
  },
  {
    type: 'row',
    key: 'row_2',
    title: '',
    children: [
      {
        type: 'string',
        key: 'number',
        title: 'Phone Number',
        icon: 'call'
      },
      {
        type: 'string',
        key: 'email',
        title: 'Email Adress',
        icon: 'mail'
      }
    ]
  },
  {
    type: 'string',
    key: 'addressOrigin',
    title: 'Appointment Date and Time',
    icon: 'airport_shuttle',
    placeholder: 'Location 1543, New York, CTHG34',
  },
  {
    type: 'text',
    key: 'Notes',
    title: 'Note',
    placeholder: 'as das dajdjaksdas da',
    icon: 'person_outline',
    classes: 'asd'
  },
/*       {
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
      }, */
];