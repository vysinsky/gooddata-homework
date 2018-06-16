```jsx
const onChange = (e) => {
    console.log('Dropdown changed to: %s', e.target.value);
};

<Dropdown
    defaultValue="2016"
    onChange={onChange}
    options={[
        {
            value: "2018",
            label: "This year"
        },
        {
            value: "2017"
        },
        {
            value: "2016"
        },
        {
            value: "2015"
        },
    ]}
/>
```
