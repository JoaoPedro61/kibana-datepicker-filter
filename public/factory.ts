import { i18n } from '@kbn/i18n';

import { ExpressionFunction, Render } from './imports';

const name = 'datepicker';

type Context = any;

interface Arguments {
  visConfig: string | null;
}

type VisParams = Required<Arguments>;

interface RenderValue {
  visData: Context;
  visType: 'datepicker';
  visConfig: VisParams;
  params: {
    listenOnChange: boolean;
  };
}

type Return = Render<RenderValue>;

export const factory = (): ExpressionFunction<typeof name, Context, Arguments, Return> => ({
  name,
  help: i18n.translate('visTypeDatepicker.function.help', {
    defaultMessage: 'Datepicker visualization',
  }),
  args: {
    visData: { },
    visConfig: {
      types: [],
      default: '"{}"',
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
