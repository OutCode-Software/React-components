Buttom component is similar to a button but with extra CSS and props

```
<ButtonOS hasFullWidth buttonColor="danger" type="button" onClick={() => route("/")}>
        Login
</ButtonOS>
````
Buttom component props
```
  title?: string;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  hasFullWidth?: boolean;
  buttonColor?: string;
  onClick?:()=> void;
  id?:string;
  sx?:any,
```
