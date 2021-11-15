export const contentTableConfig = {
  title: 'role control',

  //是否显示前面序号
  showIndexColumn: true,

  //是否选中当前行
  showSelectColum: true,

  proplist: [
    { prop: 'name', label: 'rolename', minWidth: '100' },
    { prop: 'intro', label: 'intro', minWidth: '100' },
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
