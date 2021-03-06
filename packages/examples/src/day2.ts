import { registerExamples } from './register';
import {  data as day1Data, schema as day1Schema } from './day1';

export const schema = day1Schema;

export const uischema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/name'
    },
    {
      type: 'Control',
      label: false,
      scope: '#/properties/done'
    },
    {
      type: 'Control',
      scope: '#/properties/description',
      options: {
          multi: true
      }
    },
  ]
};

export const data = day1Data;

registerExamples([
  {
    name: 'day2',
    label: 'Day 2',
    data,
    schema,
    uiSchema: uischema
  }
]);
