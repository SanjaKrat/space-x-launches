import React, { useState } from 'react';
import styled from 'styled-components';
import { SelectOption } from '../types';

type DropdownProps = {
  selectedValue: string;
  options: SelectOption[];
  onChange: (v: string) => void;
}

const SelectedMark = () => (
  <svg
    width="16"
    height="10"
    viewBox="0 0 20 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.7071 0.292893C20.0976 0.683417 20.0976 1.31658 19.7071 1.70711L8.77782 12.6364C8.34824 13.066 7.65176 13.066 7.22218 12.6364L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289C0.683417 3.90237 1.31658 3.90237 1.70711 4.29289L8 10.5858L18.2929 0.292893C18.6834 -0.0976311 19.3166 -0.0976311 19.7071 0.292893Z"
      fill="white"
    />
  </svg>
);

const DropdownArrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 7.41381L21.2929 16.7067C21.6834 17.0972 22.3166 17.0972 22.7071 16.7067C23.0976 16.3162 23.0976 15.683 22.7071 15.2925L12.7778 5.3632C12.3482 4.93362 11.6518 4.93362 11.2222 5.3632L1.29289 15.2925C0.902368 15.683 0.902368 16.3162 1.29289 16.7067C1.68342 17.0972 2.31658 17.0972 2.70711 16.7067L12 7.41381Z"
      fill="white"
    />
  </svg>
)

const DropdownArrowStyled = styled.span`
  transform: rotate(180deg);
`;

const DropdownWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OptionWrapper = styled.div`
  position: relative;
  min-width: 175px;
  border-bottom: 2px solid white;
  padding: 5px 5px 5px 10px;
  cursor: pointer;
`;

const Options = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  background-color: #1a1919;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0 10px 5px;
  border-bottom: 1px solid white;
  box-sizing: border-box;
`;

const Dropdown = ({
  options,
  selectedValue,
  onChange
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>(selectedValue);

  const selectHandler = (value: string) => {
    setSelected(value);
    onChange(value);
    setIsOpen(false);
  };

  const onSelectClick = () => setIsOpen(!isOpen);

  return (
    <DropdownWrapper tabIndex={0} onFocus={() => setIsOpen(true)} onBlur={() => setIsOpen(false)}>
      <OptionWrapper>
        <Select onClick={onSelectClick}>
          {options.find(o => o.value === selectedValue)?.text}
          {
            isOpen ? <div><DropdownArrow /></div> : <DropdownArrowStyled><DropdownArrow /></DropdownArrowStyled>
          }
        </Select>
        {
          isOpen && (
            <Options>
              {options.map((option, idx) => (
                <Option key={idx} onClick={() => selectHandler(option.value)}>
                  {option.text}
                  {
                    selected === option.value && (
                      <span>
                        <SelectedMark />
                      </span>
                    )
                  }
                </Option>
              ))}
            </Options>
          )
        }
      </OptionWrapper>
    </DropdownWrapper>
  )

}

export default Dropdown;
