//验证规则
export const rules = {
  name: [
    {
      require: true,
      message: '用户名一定要输入哦',
      trigger: 'true'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10位的字母或数字哦',
      trigger: 'blur'
    }
  ],
  password: [
    {
      require: true,
      message: '密码一定要输入哦',
      trigger: 'true'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3位以上的哦',
      trigger: 'blur'
    }
  ],
  phone: [
    {
      require: true,
      message: '手机号一定要输入哦',
      trigger: 'true'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '手机号必须为11位大陆手机号',
      trigger: 'blur'
    }
  ],
  code: [
    {
      require: true,
      message: '验证码一定要输入哦',
      trigger: 'true'
    },
    {
      pattern: /^[0-9]{6}$/,
      message: '验证码必须为6位数字',
      trigger: 'blur'
    }
  ]
}
