import React from 'react';
import Button from '../../../common/Button';
import Dropdown from '../../../common/Dropdown';
import Input from '../../../common/Input';
import { CloseBtn } from '../LaunchPopup/LaunchPopup.styledComponents';
import { InputWrapper, SideMenuStyled } from './SideMenu.styledComponents';
import { SelectOption } from '../../../types';

type SideMenuProps = {
  options: SelectOption[],
  selected: string,
  dropdownSelectHandler: (value: string) => void,
  filtershandler: () => void,
  dateFrom: string,
  dateTo: string,
  dateFromHandler: (date: string) => void,
  dateToHandler: (date: string) => void,
  inputChangeHandler: (inputData: string) => void,
  openMenu: (b: boolean) => void
}

const SideMenu = ({
  options,
  selected,
  dropdownSelectHandler,
  filtershandler,
  dateFrom,
  dateTo,
  dateFromHandler,
  dateToHandler,
  inputChangeHandler,
  openMenu
}: SideMenuProps) => {
  return (
    <SideMenuStyled>
      <CloseBtn onClick={() => openMenu(false)}>&#10006;</CloseBtn>
      <InputWrapper>
        <Input type="text" id="searchByRocket" placeholder="Rocket Name" onChange={inputChangeHandler} />
      </InputWrapper>
      <InputWrapper>
        <Input type="date" id="dateFrom" label="From" value={dateFrom.split('T')[0]} onChange={dateFromHandler} />
      </InputWrapper>
      <InputWrapper>
        <Input type="date" id="dateTo" label="To" value={dateTo.split('T')[0]} onChange={dateToHandler} />
      </InputWrapper>
      <InputWrapper>
        <Dropdown options={options} selectedValue={selected} onChange={dropdownSelectHandler} />
      </InputWrapper>
      <div>
        <Button innerText="Search" onClick={() => {
          filtershandler();
          openMenu(false);
        }} />
      </div>
    </SideMenuStyled>
  )

}

export default SideMenu;
