import React, { Component, Fragment, useState, useEffect } from 'react';
import {
	EuiFlexGroup,
	EuiFlexItem,
	EuiFormControlLayoutDelimited,
  EuiSpacer,
  EuiFormLabel,
  EuiFormControlLayout,
  EuiButtonEmpty,
  EuiPopover,
  EuiIcon,
  EuiText,
  EuiIconTip,
  EuiHorizontalRule,
  EuiFieldNumber,
  EuiButton,
  EuiSelect,
  EuiFlexGrid,
  EuiButtonToggle,
  EuiSuperDatePicker
} from '@elastic/eui';



export function Visualization(props, another) {

  console.log(props);

	const { visParams, vis, visData, config } = props;
  const { type } = vis;

  let inherithTimeRange = visData.timeRange;
  let inherithRefresh = false;
  let inherithRefreshInterval = 0;

  if (!visParams.useAGlobalContextAsADefaultValue) {
    inherithTimeRange = {
      to: visParams.defaultValuesTimeTo,
      from: visParams.defaultValuesTimeFrom,
    };
    inherithRefresh = visParams.defaultValuesRefresh;
    inherithRefreshInterval = visParams.defaultValuesRefreshInterval;
  }

  if (!inherithTimeRange) {
    inherithTimeRange = {
      from: 'now-30m',
      to: 'now'
    };
  }

	const [ recentlyUsedRanges, setRecentlyUsedRanges ] = useState([]);

  const [ isLoading, setIsLoading ] = useState(false);

  const [ maxWidth, setMaxWidth ] = useState(visParams.maxWidth);

  const [ locale, setLocale ] = useState(visParams.locale);

  const [ language, setLanguage ] = useState(visParams.language);

  const [ showUpdateButton, setShowUpdateButton ] = useState(visParams.showUpdateButton);

  const [ isAutoRefreshOnly, setIsAutoRefreshOnly ] = useState(visParams.isAutoRefreshOnly);

  const [ start, setStart ] = useState(inherithTimeRange.from);

  const [ end, setEnd ] = useState(inherithTimeRange.to);

  const [ isPaused, setIsPaused ] = useState(!inherithRefresh);

  const [ refreshInterval, setRefreshInterval ] = useState(inherithRefreshInterval);

  const onTimeChange = ({ start, end }) => {
    const recentlyUsedRange = recentlyUsedRanges.filter(recentlyUsedRange => {
      const isDuplicate =
        recentlyUsedRange.start === start && recentlyUsedRange.end === end;
      return !isDuplicate;
    });
    recentlyUsedRange.unshift({ start, end });
    setStart(start);
    setEnd(end);
    setRecentlyUsedRanges(
      recentlyUsedRange.length > 10
        ? recentlyUsedRange.slice(0, 9)
        : recentlyUsedRange
    );
    visData.timeRange.from = start;
    visData.timeRange.to = end;
    vis.filters.timeRange.from = start;
    vis.filters.timeRange.to = end;
    vis.aggs.setTimeRange(visData.timeRange);
    type.visData.dependencies.npStart.plugins.data.query.timefilter.timefilter.setTime(vis.filters.timeRange);
    vis.updateState();
    setIsLoading(true);
    startLoading();
  };


  const onRefresh = ({ start, end, refreshInterval }) => {
    return new Promise(resolve => {
      setTimeout(resolve, 100);
    }).then(() => {
      type.visData.dependencies.npStart.plugins.data.query.timefilter.timefilter.setTime({});
    });
  };

  const startLoading = () => {
    setTimeout(stopLoading, 100);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  const onRefreshChange = ({ isPaused, refreshInterval }) => {
    setIsPaused(isPaused);
    setRefreshInterval(refreshInterval);
    type.visData.dependencies.npStart.plugins.data.query.timefilter.timefilter.setRefreshInterval({
      pause: isPaused,
      value: refreshInterval
    });
  };
  
  useEffect(() => {
    let didCancel = false;

    if (!didCancel) {
      setShowUpdateButton(visParams.showUpdateButton)
      setIsAutoRefreshOnly(visParams.isAutoRefreshOnly);
      setMaxWidth(visParams.maxWidth);
      setLocale(visParams.locale);
      setLanguage(visParams.language);
      if (!visParams.useAGlobalContextAsADefaultValue) {
        setIsPaused(!visParams.defaultValuesRefresh);
        setStart(visParams.defaultValuesTimeFrom);
        setEnd(visParams.defaultValuesTimeTo);
        setRefreshInterval(visParams.defaultValuesRefreshInterval);
      }
    }

    return () => {
      didCancel = true;
    }
  }, [ visParams ]);


	return (
		<Fragment>
			<div style={maxWidth ? {width: `${maxWidth}px`} : {} }>	
	  		<EuiSuperDatePicker 
	        isLoading={isLoading}
	        start={start}
	        end={end}
	        onTimeChange={onTimeChange}
	        onRefresh={onRefresh}
	        isPaused={isPaused}
	        refreshInterval={refreshInterval}
	        onRefreshChange={onRefreshChange}
	        recentlyUsedRanges={recentlyUsedRanges}
	        showUpdateButton={showUpdateButton}
          isAutoRefreshOnly={isAutoRefreshOnly}
          locale={locale}
	  		/>
			</div>
  	</Fragment>
	);

}
