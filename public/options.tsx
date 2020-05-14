import React, { useEffect, useMemo, Fragment } from 'react';
import { EuiPanel, EuiSpacer, EuiSuperDatePicker } from '@elastic/eui';

import { NumberInputOption, SwitchOption, SelectOption, VisOptionsProps } from './imports';

import { DatePickerVisParams } from './types';

const locales = [
  {
    text: 'Brazil',
    value: 'pt-br'
  },
  {
    text: 'EUA',
    value: 'en-us'
  }
];


function DatePickerOptions({
  aggs,
  aggsLabels,
  stateParams,
  setValidity,
  setValue,
}: VisOptionsProps<DatePickerVisParams>) {

  const onRefreshChange = ({ isPaused, refreshInterval }) => {
    setValue('defaultValuesRefresh', !isPaused);
    setValue('defaultValuesRefreshInterval', refreshInterval);
  };

  const onTimeChange = ({ start, end }) => {
    setValue('defaultValuesTimeFrom', start);
    setValue('defaultValuesTimeTo', end);
  };

  const datepickerFragment = () => {
    const { isAutoRefreshOnly, locale } = stateParams;
    const { defaultValuesTimeTo, defaultValuesTimeFrom, defaultValuesRefresh, defaultValuesRefreshInterval } = stateParams;


    return (
      <EuiPanel paddingSize="s">
	  		<EuiSuperDatePicker 
	        start={defaultValuesTimeFrom}
          end={defaultValuesTimeTo}
          isPaused={!defaultValuesRefresh}
	        onTimeChange={onTimeChange}
	        refreshInterval={defaultValuesRefreshInterval}
	        onRefreshChange={onRefreshChange}
	        recentlyUsedRanges={[]}
	        showUpdateButton={false}
          isAutoRefreshOnly={isAutoRefreshOnly}
          locale={locale}
	  		/>
      </EuiPanel>
    );
  };

  return (
    <Fragment>
      <EuiPanel paddingSize="s">
        <SwitchOption
          label="Show update button"
          paramName="showUpdateButton"
          value={stateParams.showUpdateButton}
          setValue={setValue}
          data-test-subj="showUpdateButton"
        />
        <SwitchOption
          label="Only refresh mode"
          paramName="isAutoRefreshOnly"
          value={stateParams.isAutoRefreshOnly}
          setValue={setValue}
          data-test-subj="isAutoRefreshOnly"
        />
        <SwitchOption
          label="Use the global context as default value"
          paramName="useAGlobalContextAsADefaultValue"
          value={stateParams.useAGlobalContextAsADefaultValue}
          setValue={setValue}
          data-test-subj="useAGlobalContextAsADefaultValue"
        />
      </EuiPanel>
      <EuiSpacer size="s"/>
      <EuiPanel paddingSize="s">
        <SelectOption
          options={locales}
          label="Locale"
          paramName="locale"
          value={stateParams.locale}
          setValue={setValue}
          data-test-subj="locale"
        />
      </EuiPanel>
      <EuiSpacer size="s"/>
      <EuiPanel paddingSize="s">
        <NumberInputOption
          label="Max Width(px)"
          paramName="maxWidth"
          value={stateParams.maxWidth}
          setValue={setValue}
          min={0}
          max={1000}
          data-test-subj="maxWidth"
        />
      </EuiPanel>
      <EuiSpacer size="s"/>
      {stateParams.useAGlobalContextAsADefaultValue ? null : datepickerFragment()}
    </Fragment>
  );
}

export { DatePickerOptions };
