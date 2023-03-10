import React from 'react'
import InputField from '../../components/input/inputField';
import SearchInputField from '../../components/input/serachInput';
import DynamicTable, { THeadType } from '../../components/table';
import { AdminAlerType } from '../../types/tableTypes';
const headerData: THeadType<AdminAlerType>[] = [
  {
    h: "Name",
    accessor: "alertType",
  },
  {
    h: "Place",
    accessor: "site",
  },
];
const tableData = [{
  alertType:"Lockdown",
  site:"kathmadu"
}]

const Dashboard = () => {
  return (
    <>
      <InputField type='text' name="name" label='Enter Your Name' />
      <SearchInputField name="SearchName" />

      <DynamicTable thData={headerData} tdData={tableData} />
    </>
  )
}

export default Dashboard