import { resolve } from 'path';
import { Legacy } from './../../kibana';

import { LegacyPluginApi, LegacyPluginInitializer } from '../../src/legacy/types';



const datepickerVisPluginInitializer: LegacyPluginInitializer = ({ Plugin }: LegacyPluginApi) =>
  new Plugin({
    id: 'kbn-datepicker',
    require: ['kibana', 'elasticsearch'],
    publicDir: resolve(__dirname, 'public'),
    uiExports: {
      visTypes: [
        'plugins/kbn-datepicker/legacy'
      ],
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
