import { Status } from './imports';
import { DatePickerOptions } from './options';
import { Visualization } from './visualization';



export const definition = (dependencies) => {
  return {
  	type: 'kbn-datepicker',
    name: 'kbn-datepicker',
    icon: 'recentlyViewedApp',
    title: 'Datepicker',
    description: 'Embedded dashboards do not display the time range or allow users to modify the time range. Use this to view and edit the time range in embedded dashboards.',
    requiresUpdateStatus: [Status.AGGS, Status.PARAMS, Status.UI_STATE],
    requiresPartialRows: true,
    visData: {
      dependencies
    },
    visConfig: {
      defaults: {
        showUpdateButton: true
      },
      component: Visualization
    },
    editorConfig: {
      optionsTemplate: DatePickerOptions,
    },
    responseHandler: 'none',
    requestHandler: 'none',
  }
};
