import { PluginInitializerContext, VisualizationsSetup, ExpressionsPublicPlugin, CoreSetup, CoreStart, Plugin, IUiSettingsClient } from './imports';

import { factory } from './factory';
import { definition } from './definition';



interface DatepickerVisualizationDependencies {
  uiSettings: IUiSettingsClient;
  [x: string]: any;
}

export interface DatepickerPluginSetupDependencies {
  expressions: ReturnType<ExpressionsPublicPlugin['setup']>;
  visualizations: VisualizationsSetup;
  npSetup: any;
  npStart: any;
}

export class DatepickerVisPlugin implements Plugin<Promise<void>, void> {
  initializerContext: PluginInitializerContext;

  constructor(initializerContext: PluginInitializerContext) {
    this.initializerContext = initializerContext;
  }

  public async setup(core: CoreSetup, { expressions, visualizations, npSetup, npStart }: DatepickerPluginSetupDependencies ) {
    const visualizationDependencies: Readonly<DatepickerVisualizationDependencies> = {
      uiSettings: core.uiSettings,
      core,
      expressions,
      visualizations,
      npSetup,
      npStart
    };
    const _def = definition(visualizationDependencies);
    expressions.registerFunction(factory);
    (visualizations as any).createReactVisualization(_def);
  }

  public start(core: CoreStart) { }

}
