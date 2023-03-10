We have three distinct card types, alert card type ,icon text type and card type in card components.

Alert card component
```
<AlertCard image={login} date="20-02-2023" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
``` 
Alert card Component Props
```
    image?:string,
    description?:string,
    date?:string
```
Card component
```
<CardComponent icon={login} title="Card component" />
```
Card Component Props
```
  icon?: any;
  title?: string;
  sx?: any;
  onClick?: () => void;
  active?: boolean;
  description?: 
    {
      title?:string,
      label?:string,
    }[]
  ;

```
Icon text type
```
<IconText icon={login} title="Menu" onClick={onClick()} />
```
Icon text type Props 
```
    icon?:any;
    title?:string;
    sx?:any
    onClick?:()=> void;
    active?:boolean,
```
