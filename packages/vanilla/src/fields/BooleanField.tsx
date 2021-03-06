import * as React from 'react';
import {
  FieldProps,
  isBooleanControl,
  mapDispatchToFieldProps,
  mapStateToFieldProps,
  RankedTester,
  rankWith,
} from '@jsonforms/core';
import { connectToJsonForms } from '@jsonforms/react';
import { StatelessComponent, SyntheticEvent } from 'react';

const BooleanFd: StatelessComponent<FieldProps> = (props: FieldProps) => {
  const { data, className, id, enabled, uischema, path, handleChange } = props;

  return (
    <input
      type='checkbox'
      checked={data || ''}
      onChange={(ev: SyntheticEvent<HTMLInputElement>) =>
        handleChange(path, ev.currentTarget.checked)
      }
      className={className}
      id={id}
      disabled={!enabled}
      autoFocus={uischema.options && uischema.options.focus}
    />
  );
};

/**
 * Default tester for boolean controls.
 * @type {RankedTester}
 */
export const booleanFieldTester: RankedTester = rankWith(2, isBooleanControl);
export default connectToJsonForms(
  mapStateToFieldProps,
  mapDispatchToFieldProps
)(BooleanFd);
