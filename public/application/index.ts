import { VisComponent } from './components/visualization';
import { OptionsComponent } from './components/options';

import { ExpressionsStart } from '../../../../src/plugins/expressions/public';
import { VisualizationsSetup } from '../../../../src/plugins/visualizations/public';
import { DataPublicPluginStart } from '../../../../src/plugins/data/public';


export interface DatepickerPluginVisualizationDeps {
  [x: string]: any;
  expressions: ExpressionsStart;
  data: DataPublicPluginStart;
  visualizations: VisualizationsSetup;
}

export function renderVis(id: string, name: string, deps: DatepickerPluginVisualizationDeps): void {
  const _fac = () => ({
    name,
    help: "Datepicker visualization",
    args: {
      visData: { },
      visConfig: {
        types: [],
        help: "",
        default: `"{
          "showUpdateButton": true,
          "maxWidth": 0,
          "isAutoRefreshOnly": false,
          "useAGlobalContextAsADefaultValue": true,
          "defaultValuesTimeTo": "now",
          "defaultValuesTimeFrom": "now-15m",
          "defaultValuesRefresh": false,
          "defaultValuesRefreshInterval": 0,
          "locale":"en-us",
          "language":"en-us"
        }"`,
      },
    },
    fn(context: any, args: any) {
      const visConfig = args.visConfig && JSON.parse(args.visConfig);
      return {
        type: 'render',
        as: 'visualization',
        value: {
          visData: context,
          visType: name,
          visConfig,
          params: {
            listenOnChange: true,
          },
        },
      };
    },
  });

  const _def = (deps: any) => ({
  	type: id,
    name,
    icon: 'recentlyViewedApp',
    title: 'Datepicker',
    description: 'Embedded dashboards do not display the time range or allow users to modify the time range. Use this to view and edit the time range in embedded dashboards.',
    requiresUpdateStatus: [],
    requiresPartialRows: true,
    visConfig: {
      dependencies: {
        data: deps.data,
      },
      defaults: {
        showUpdateButton: true,
        maxWidth: 0,
        isAutoRefreshOnly: false,
        useAGlobalContextAsADefaultValue: true,
        defaultValuesTimeTo: 'now',
        defaultValuesTimeFrom: 'now-15m',
        defaultValuesRefresh: false,
        defaultValuesRefreshInterval: 0,
        locale: 'en-us',
        language: 'en-us'
      },
      component: VisComponent
    },
    editorConfig: {
      optionsTemplate: OptionsComponent,
    },
    responseHandler: 'none',
    requestHandler: 'none',
  });
  try {
    (deps.expressions as any).registerFunction(_fac);
  } catch(_) {}
  deps.visualizations.createReactVisualization(_def(deps));
}
