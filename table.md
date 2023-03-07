Table components have table header (thData) and table body (TdData) props.
 1. Table header (thData) shows tha header of the table. For example :- 
 ```
 export type AdminAlerType = {
    alertType: string;
    site: string;
  };
  
 const headerData: THeadType<AdminAlerType>[] = [
  {
    h: "Name",
    accessor: "alertType",
  },
  {
    h: "Status",
    accessor: "site",
  },
];
```
We created a table with header data, where the accessor parameter is set to match our JSON parameters and the h parameter allows us to display the string on the web.

2.Table body (tdData) shows the body of the table, only a json file. For example :- 
```
const tableData = [{
  alertType:"Lockdown",
  site:"kathmadu"
}]
```

Example :- 
```
<DynamicTable thData={headerData} tdData={tableData} />
```
