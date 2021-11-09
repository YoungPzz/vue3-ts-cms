type IFormType = 'input' | 'select' | 'datepicker' | 'password'

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[] //选择,
  otherOptions?: any
}

export interface IForm {
  labelWidth: string
  itemLayout?: any
  colLayout: any
  formItems: IFormItem[]
}
