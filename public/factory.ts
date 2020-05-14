import { ExpressionFunction, Render } from './imports';

const name = 'kbn-datepicker';

type Context = any;

interface Arguments {
  visConfig: string | null;
}

type VisParams = Required<Arguments>;

interface RenderValue {
  visData: Context;
  visType: 'kbn-datepicker';
  visConfig: VisParams;
  params: {
    listenOnChange: boolean;
  };
}

type Return = Render<RenderValue>;

export const factory = (): ExpressionFunction<typeof name, Context, Arguments, Return> => ({
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
  fn(context, args) {
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
