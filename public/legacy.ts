
import { PluginInitializerContext, npSetup, npStart, visualizationsSetup } from './imports';
import { DatepickerPluginSetupDependencies } from './plugin';
import { plugin } from './index';



const plugins: Readonly<DatepickerPluginSetupDependencies> = {
  expressions: npSetup.plugins.expressions,
  visualizations: visualizationsSetup,
  npSetup,
  npStart
};

const pluginInstance = plugin({} as PluginInitializerContext);

export const setup = pluginInstance.setup(npSetup.core, plugins);
export const start = pluginInstance.start(npStart.core);
