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

	const { visParams, vis, visData, config } = props;
  const { type } = vis;

  let initializeTimeRange = visData.timeRange;

  if (!initializeTimeRange) {
    initializeTimeRange = {
      from: 'now-30m',
      to: 'now'
    };
  }

	const [ recentlyUsedRanges, setRecentlyUsedRanges ] = useState([]);

  const [ isDisabled, setIsDisabled ] = useState(false);

  const [ isLoading, setIsLoading ] = useState(false);

  const [ showUpdateButton, setShowUpdateButton ] = useState(visParams.showUpdateButton);

  useEffect(() => {
    let didCancel = false;

    !didCancel && setShowUpdateButton(visParams.showUpdateButton)

    return () => {
      didCancel = true;
    }
  }, [ visParams ]);

  const [ isAutoRefreshOnly, setIsAutoRefreshOnly ] = useState(false);

  const [ start, setStart ] = useState(initializeTimeRange.from);
  const [ end, setEnd ] = useState(initializeTimeRange.to);
  const [ isPaused, setIsPaused ] = useState(true);
  const [ refreshInterval, setRefreshInterval ] = useState();

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

	return (
		<Fragment>
			<div style={{width: '500px'}}>	
	  		<EuiSuperDatePicker 
	  			isDisabled={isDisabled}
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
	  		/>
			</div>
  	</Fragment>
	);

}
