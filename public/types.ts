
import { SchemaConfig } from './imports';


export interface DatePickerVisParams {
  type: 'kbn_datepicker';
  showUpdateButton: boolean;
  isAutoRefreshOnly: boolean;
  maxWidth: number;
  useAGlobalContextAsADefaultValue: boolean;
  defaultValuesTimeTo: string;
  defaultValuesTimeFrom: string;
  defaultValuesRefresh: boolean;
  defaultValuesRefreshInterval: number;
  locale: string;
  language: string;
}
