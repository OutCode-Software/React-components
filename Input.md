In Input componet we have two type of inputs, 


1. Input component:- that can have text,email,number,password,date types. props that are used are
 ```
  label: string;
  type: string;
  name: string;
  error?: string | null;
  placeholder?: string;
  rightIcon?:string | ReactElement;
  onChange?:()=> void; //use for calling function
```
    
2. Search input:- it have search icon inside input field, can have text,email,number,password,date types
  
  ```
  label?: string;
  type?: string;
  name: string;
  error?: string | null;
  placeholder?: string;
  onChange?: () => void; //use for calling function
  value?:string,
```
 Example
 ```
 <InputField type='text' name="name" label='Enter Your Name' />
 <SearchInputField name="SearchName" label='Search' />

 ```


