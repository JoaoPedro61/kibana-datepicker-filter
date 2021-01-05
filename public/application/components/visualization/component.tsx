import React, { useState, useEffect } from 'react';
import { EuiSuperDatePicker } from '@elastic/eui';



const commonsRanges = [
  { start: 'now/d', end: 'now/d', label: 'Hoje' },
  { start: 'now/w', end: 'now/w', label: 'Esta semana' },
  { start: 'now/M', end: 'now/M', label: 'Este mês' },
  { start: 'now/y', end: 'now/y', label: 'Este ano' },
  { start: 'now-1d/d', end: 'now-1d/d', label: 'Ontem' },
  { start: 'now/w', end: 'now', label: 'Esta semana à hoje' },
  { start: 'now/M', end: 'now', label: 'Este mês à hoje' },
  { start: 'now/y', end: 'now', label: 'Este ano à hoje' },
];

export function Component(props: any) {
	const { visParams, vis, visData } = props;
  const { type } = vis;

  let inherithTimeRange = visData.timeRange;
  let inherithRefresh = false;
  let inherithRefreshInterval = 0;
  let inherithCommonsRanges: any = void 0;

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

  if (visParams.locale) {
    if (visParams.locale === 'pt-br') {
      inherithCommonsRanges = commonsRanges;
    } else {
      inherithCommonsRanges = void 0;
    }
  } else {
    inherithCommonsRanges = void 0;
  }

	const [ recentlyUsedRanges, setRecentlyUsedRanges ] = useState([]);

  const [ isLoading, setIsLoading ] = useState(false);

  const [ maxWidth, setMaxWidth ] = useState(visParams.maxWidth);

  const [ locale, setLocale ] = useState(visParams.locale);

  const [ showUpdateButton, setShowUpdateButton ] = useState(visParams.showUpdateButton);

  const [ isAutoRefreshOnly, setIsAutoRefreshOnly ] = useState(visParams.isAutoRefreshOnly);

  const [ start, setStart ] = useState(inherithTimeRange.from);

  const [ end, setEnd ] = useState(inherithTimeRange.to);

  const [ isPaused, setIsPaused ] = useState(!inherithRefresh);

  const [ refreshInterval, setRefreshInterval ] = useState(inherithRefreshInterval);

  const onTimeChange = ({ start, end }: any) => {
    const recentlyUsedRange = recentlyUsedRanges.filter(recentlyUsedRange => {
      const isDuplicate =
        (recentlyUsedRange as any).start === start && (recentlyUsedRange as any).end === end;
      return !isDuplicate;
    });
    (recentlyUsedRange as any).unshift({ start, end });
    setStart(start);
    setEnd(end);
    setRecentlyUsedRanges(
      recentlyUsedRange.length > 10
        ? recentlyUsedRange.slice(0, 9)
        : recentlyUsedRange
    );
    visData.timeRange.from = start;
    visData.timeRange.to = end;
    type.visConfig.dependencies.data.query.timefilter.timefilter.setTime(visData.timeRange);
    vis.updateState();
    setIsLoading(true);
    startLoading();
  };


  const onRefresh = ({ start, end, refreshInterval }: any) => {
    return new Promise(resolve => {
      setTimeout(resolve, 100);
    }).then(() => {
      type.visConfig.dependencies.data.query.timefilter.timefilter.setTime({});
    });
  };

  const startLoading = () => {
    setTimeout(stopLoading, 100);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  const onRefreshChange = ({ isPaused, refreshInterval }: any) => {
    setIsPaused(isPaused);
    setRefreshInterval(refreshInterval);
    type.visConfig.dependencies.data.query.timefilter.timefilter.setRefreshInterval({
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
      if (!visParams.useAGlobalContextAsADefaultValue) {
        setIsPaused(!visParams.defaultValuesRefresh);
        setStart(visParams.defaultValuesTimeFrom);
        setEnd(visParams.defaultValuesTimeTo);
        setRefreshInterval(visParams.defaultValuesRefreshInterval);
      }
      if (visParams.locale) {
        if (visParams.locale === 'pt-br') {
          inherithCommonsRanges = commonsRanges;
        } else {
          inherithCommonsRanges = void 0;
        }
      } else {
        inherithCommonsRanges = void 0;
      }
    }

    return () => {
      didCancel = true;
    }
  }, [ visParams ]);

  const _superPicker = () => {
    return (
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
        commonlyUsedRanges={inherithCommonsRanges}
      />
    );
  };

  const _limitedWidth = () => {
    return (
      <div style={{...(maxWidth ? {width: `${maxWidth}px`} : { width: '100%' })}}>
        {_superPicker()}  
      </div>
    );
  };

  if (maxWidth) {
    return (_limitedWidth());
  }
  return (
    _superPicker()
	);

}
