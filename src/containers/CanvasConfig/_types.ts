export interface PropertyProps {
    propertyID: string;
    propertyLabel: string;
    uiElementType: string;
    placeholder?: string;
    helperText?: string;
    multiline?: boolean;
    multiple?: boolean;
    onChange?: Function;
    required?: Function;
    validationHook?: Function;
    derivesFrom?: string;
    defaultValue?: string;
    dataEnum?: Array<string | number>;
    dataURL?: string;
    propertyGroup?: PropertyGroupProps;
}

export interface PropertyGroupProps {
    propertyGroupId: string;
    propertyGroupLabel: string;
    properties: Array<PropertyProps>;
    sections?: Array<PropertyProps>;
}

export interface CanvasConfigProps {
    properties: Array<PropertyGroupProps>;
    sections?: Array<PropertyGroupProps>;
}

/**
 *  {
 *  properties : {
 *  [
 *      {
 *          ropertyGroupId: "cavnas-properties",
            propertyGroupLabel: "Canvas Properties",
            properties: [  
                propertyLabel: string;
                uiElementType: string;
                placeholder?: string;
                helperText?: string;
                multiline?: boolean;
                multiple?: boolean;
                onChange?: Function;
                required?: Function;
                validationHook?: Function;
                derivesFrom?: string;
                defaultValue?: string;
                dataEnum?: Array<string | number>;
                dataURL?: string;
                propertyGroup: {
                    properties : [
                        
                    ]

                };
            }

            ]
            sections?: Array<PropertyProps>;
 * 
 *      }
 * ]
 * }
 *  sections : {}
 * 
 * }
 * 
 * 
 */