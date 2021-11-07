type IFormType = 'input' | 'select' | 'datepicker' | 'password'

export interface IFormItem {
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[] //选择,
  otherOptions?: any
}
