import React from 'react';

interface DropdownProps {
  formName: string,
  selectedValue?: string,
  options: { value: string, text: string }[];
}

const Dropdown = (props: DropdownProps) => {
  const { formName, selectedValue, options } = props;

  return (
    <select className="rounded-md px-4 py-2 bg-slate-900 border mb-6" name={formName} defaultValue={selectedValue}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;