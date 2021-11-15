export const contentTableConfig = {
  //是否显示前面序号
  showIndexColumn: true,

  //是否选中当前行
  showSelectColum: true,

  proplist: [
    { prop: 'name', label: '用户名', minWidth: '100' },
    { prop: 'realname', label: '真实姓名', minWidth: '100' },
    { prop: 'cellphone', label: '手机号码', minWidth: '100' },
    { prop: 'enable', label: '状态', minWidth: '100', slotname: 'status' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotname: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotname: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotname: 'handler'
    }
  ]
}
