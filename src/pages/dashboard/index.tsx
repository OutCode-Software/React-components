import React from "react";
import InputField from "../../components/input/inputField";
import SearchInputField from "../../components/input/serachInput";
import DynamicTable, { THeadType } from "../../components/table";
import { AdminAlerType } from "../../types/tableTypes";
import login from "../../resources/images/login.png";
import AlertCard from "../../components/alertCard";
import CardComponent from "../../components/card";

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
const tableData = [
  {
    alertType: "Lockdown",
    site: "kathmadu",
  },
];

const Dashboard = () => {
  return (
    <>
      <AlertCard
        image={login}
        date="20-02-2023"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <CardComponent icon={login} title="Card component" />

      <InputField type="text" name="name" label="Enter Your Name" />
      <SearchInputField name="SearchName" />

      <DynamicTable thData={headerData} tdData={tableData} />
    </>
  );
};

export default Dashboard;
