export default {
  mobile (phoneNum) {
    return /^(13[0-9]|15[^4,\D]|16[6]|17[0-9]|18[0-9]|14[56789]|19[189])[0-9]{8}$/.test(`${phoneNum}`) ? '' : '手机号码格式错误'
  },
  notEmpty (str, key) {
    const s = `${str}`.trim()
    if (typeof str === 'object') {
      return str !== null && Object.keys(str).length > 0 ? '' : `${key}不可为空`
    }
    return !/null/.test(s) && !/undefined/.test(s) && /.+/.test(`${s}`) ? '' : `${key}不可为空`
  },
  idCard (idCardNumber) {
    if (!idCardNumber) return '身份证号不可为空'
    return /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i.test(`${idCardNumber}`) ? '' : '身份证号格式错误'
  },
  verifyCode (verifyCode) {
    return /^\d{6}$/.test(`${verifyCode}`) ? '' : '验证码应为六位数字'
  },
  cnName (name, tips = '请输入正确的真实姓名') {
    return /^([A-Za-z]|[\u4E00-\u9FA5]|[\u4E00-\u9FA5]\u00b7?[\u4E00-\u9FA5])+$/.test(`${name}`) ? '' : tips
  },
  companyName (name, tips = '请输入正确的企业名称') {
    return /^([A-Za-z（）()]|\d|[\u4E00-\u9FA5]|[\u4E00-\u9FA5]\u00b7?[\u4E00-\u9FA5])+$/.test(`${name}`) ? '' : tips
  },
  nameLimit (name) {
    return /^.{1,10}$/.test(`${name}`.replace(/[\u4E00-\u9FA5]/g, 's')) ? '' : '真实姓名不能大于10个字符'
  },
  carOwnerLimit (name) {
    return /^.{1,30}$/.test(`${name}`.replace(/[\u4E00-\u9FA5]/g, 's')) ? '' : '车辆所有人名称不能大于30个字符'
  },
  carNumber (Number) {
    if (`${Number}` === '') return '请输入车牌号'
    return /^[A-Za-z][A-Za-z0-9]{5,6}$/i.test(`${Number}`) ? '' : '车牌号格式不正确'
  },
  date (date) {
    // eslint-disable-next-line
    return /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/.test(date)
  },
  imgFilter (fileName) {
    // eslint-disable-next-line
    return /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/png|image\/pipeg|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i
      .test(`${fileName}`) ? '' : '上传图片格式不正确，请重新上传'
  },
  wordOrNum (content, tips = '请输入英文字母或数字') {
    return /^([a-zA-Z]|\d)+$/.test(content) ? '' : tips
  },
  email (content, tips = '请输入正确的邮箱') {
    return /^([a-zA-Z0-9_-]+|[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+)@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(content) ? '' : tips
  }
}
