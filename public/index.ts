import { PluginInitializerContext } from './imports';
import { DatepickerVisPlugin as Plugin } from './plugin';



export function plugin(initializerContext: PluginInitializerContext) {
  return new Plugin(initializerContext);
}
