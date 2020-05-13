import React, { useEffect, useMemo } from 'react';
import { get } from 'lodash';
import { EuiIconTip, EuiPanel } from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import { FormattedMessage } from '@kbn/i18n/react';

import { NumberInputOption, SwitchOption, SelectOption, tabifyGetColumns, VisOptionsProps } from './imports';

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
        label={i18n.translate('visTypeDatePicker.params.showUpdateButtonLabel', {
          defaultMessage: 'Show update button',
        })}
        paramName="showUpdateButton"
        value={stateParams.showUpdateButton}
        setValue={setValue}
        data-test-subj="showUpdateButton"
      />

    </EuiPanel>
  );
}

export { DatePickerOptions };
