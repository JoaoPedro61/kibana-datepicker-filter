import React, { Fragment } from 'react';
import {
  EuiPanel,
  EuiSpacer,
  EuiSuperDatePicker,
  EuiFieldNumber,
  EuiSwitch,
  EuiSelect,
  EuiForm,
  EuiFormRow
} from '@elastic/eui';





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


function Component({
  stateParams,
  setValue,
}: any) {

  const onRefreshChange = ({ isPaused, refreshInterval }: any) => {
    setValue('defaultValuesRefresh', !isPaused);
    setValue('defaultValuesRefreshInterval', refreshInterval);
  };

  const onTimeChange = ({ start, end }: any) => {
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
        <EuiSwitch
          label="Show update button"
          name="showUpdateButton"
          checked={stateParams.showUpdateButton}
          onChange={e => setValue('showUpdateButton', e.target.checked)}
          data-test-subj="showUpdateButton"
        />
        <EuiSpacer size="s"/>
        <EuiSwitch
          label="Only refresh mode"
          name="isAutoRefreshOnly"
          checked={stateParams.isAutoRefreshOnly}
          onChange={e => setValue('isAutoRefreshOnly', e.target.checked)}
          data-test-subj="isAutoRefreshOnly"
        />
        <EuiSpacer size="s"/>
        <EuiSwitch
          label="Use the global context as default value"
          name="useAGlobalContextAsADefaultValue"
          checked={stateParams.useAGlobalContextAsADefaultValue}
          onChange={e => setValue('useAGlobalContextAsADefaultValue', e.target.checked)}
          data-test-subj="useAGlobalContextAsADefaultValue"
        />
      </EuiPanel>
      <EuiSpacer size="s"/>
      <EuiPanel paddingSize="s">
        <EuiForm>
          <EuiFormRow fullWidth label="Locale">
            <EuiSelect
              fullWidth
              options={locales}
              name="locale"
              value={stateParams.locale}
              onChange={e => setValue('locale', e.target.value)}
              data-test-subj="locale"
            />
          </EuiFormRow>
          <EuiSpacer size="s"/>
          <EuiFormRow fullWidth label="Max Width(px)">
            <EuiFieldNumber
              fullWidth
              name="maxWidth"
              value={stateParams.maxWidth}
              onChange={e => setValue('maxWidth', e.target.value)}
              min={0}
              max={1000}
              data-test-subj="maxWidth"
            />
          </EuiFormRow>
        </EuiForm>
      </EuiPanel>
      <EuiSpacer size="s"/>
      {stateParams.useAGlobalContextAsADefaultValue ? null : datepickerFragment()}
    </Fragment>
  );
}

export { Component };
