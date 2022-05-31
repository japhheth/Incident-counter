import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export const useActions = (actions) => {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch]
  );
};
