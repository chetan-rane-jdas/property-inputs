export type LuiDropdownProps = {
  /**
   * Required: Dropdown list item data array
   */
  itemData: any[];

  /**
   * Required: Defines the property name used for list item key
   */
  itemKey: string;

  /**
   * Required: Defines the property name used for list item display
   */
  itemDisplayName: string;

  /**
   * Optional: Default array value for the dropdown.
   */
  defaultValue?: unknown;

  /**
   * Optional: Defines the property name required to disable dropdown
   */
  disabled?: boolean;

  /**
   * Optional: Id for the component
   */
  id?: string;

  /**
   * Required: Display text for dropdown label
   */
  inputLabel: string;

  /**
   * Required: Selected item
   */
  selectedItem: any;

  /**
   * Required: Set Width of each Dropdown list container
   */
  width: number;

  /**
   * Required: Set Height of each Dropdown list container
   */
  maxHeight: number;

  /**
   * Required: The callback raised when items are selected from the Dropdown list.
   */
  onSelectionChange: (event: any) => void;
};
