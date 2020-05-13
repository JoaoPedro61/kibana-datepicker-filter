import React, { useEffect, useMemo } from 'react';
import { get } from 'lodash';
import { EuiIconTip, EuiPanel } from '@elastic/eui';

import { NumberInputOption, SwitchOption, SelectOption, VisOptionsProps } from './imports';

import { DatePickerVisParams } from './types';




function DatePickerOptions({
  aggs,
  aggsLabels,
  stateParams,
  setValidity,
  setValue,
}: VisOptionsProps<DatePickerVisParams>) {
  return (
    <EuiPanel paddingSize="s">

      <SwitchOption
        label="Show update button"
        paramName="showUpdateButton"
        value={stateParams.showUpdateButton}
        setValue={setValue}
        data-test-subj="showUpdateButton"
      />

    </EuiPanel>
  );
}

export { DatePickerOptions };
