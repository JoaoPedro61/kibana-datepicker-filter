import { resolve } from 'path';
import { Legacy } from './../../kibana';

import { LegacyPluginApi, LegacyPluginInitializer } from '../../src/legacy/types';



const datepickerVisPluginInitializer: LegacyPluginInitializer = ({ Plugin }: LegacyPluginApi) =>
  new Plugin({
    id: 'datepicker',
    require: ['kibana', 'elasticsearch'],
    publicDir: resolve(__dirname, 'public'),
    uiExports: {
      visTypes: [
        'plugins/datepicker/legacy'
      ],
      styleSheetPaths: resolve(__dirname, 'public/index.scss'),
      hacks: [
        resolve(__dirname, 'public/legacy')
      ],
      injectDefaultVars: server => ({}),
    },
    init: (server: Legacy.Server) => ({}),
    config(Joi: any) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },
  } as Legacy.PluginSpecOptions);

// eslint-disable-next-line import/no-default-export
export default datepickerVisPluginInitializer;
