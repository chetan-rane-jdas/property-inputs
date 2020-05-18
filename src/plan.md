- Properties should be derived from a configuration
- Configurations should provide the following features
    - Define a unique ID for the field
    - Define a Label for the field
    - Define the type of the field
    - Define a set of values that the field can take.
    - define a dataURL from where data can be fetched.
    - Define the default value in the field
    - Define the placeholder text
    - define the helperText 
    - Define multiline option
    - Define multiple for select options,
    - define the default value for the field
    - define the source of the field
    - Define that the property is derived from another property
    - Define a section of properties that can be Dynamically instantiated into sets
    
```javascript
{
    properties : [
        {
            propertyID : "",
            propertyLabel : "",
            uiElementType : "",
            dataEnum : [],
            dataURL : "",
            defaultValue: "",
            placeholder : "",
            helperText : "",
            multiline: true | false,
            multiple : true | false,
            onChange: () => {},
            required: () => {},
            validationHook : () => {},
            derivesFrom : "<propertyID>"
        }
    ]
    sections : [
        {
            propertyID : "",
            propertyLabel : "",
            uiElementType : "",
            dataEnum : [],
            dataURL : "",
            defaultValue: "",
            placeholder : "",
            helperText : "",
            multiline: true | false,
            multiple : true | false,
            onChange: () => {},
            required: true | false,
            validationHook : () => {},
            derivesFrom : "<propertyID>",
        },
        {
            propertyID : "",
            propertyLabel : "",
            uiElementType : "",
            dataEnum : [],
            dataURL : "",
            defaultValue: "",
            placeholder : "",
            helperText : "",
            multiline: true | false,
            onChange: () => {},
            required: () => {},
            validationHook : () => {},
            derivesFrom : "<propertyID>"
        }     
    ]
}

```