import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ defaultValue, onChange, options }) => (
  <select defaultValue={defaultValue} onChange={onChange}>
    {options.map(({ value, label }) => (
      <option key={value} value={value}>{label || value}</option>
    ))}
  </select>
);

Dropdown.propTypes = {
  defaultValue: PropTypes.string,
  /**
   * @param {SyntheticEvent} event
   */
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    /**
     * If not provided, `value` will be used as option label
     */
    label: PropTypes.string
  }))
};

Dropdown.defaultProps = {
  defaultValue: undefined,
  onChange: _ => _,
  options: []
};

export default Dropdown;
