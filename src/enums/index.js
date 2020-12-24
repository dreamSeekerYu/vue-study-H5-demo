export const commonFilters = (arr) => {
  if (!arr || arr?.length == 0) return function () { }
  return function (val) {
    return arr.filter(item => item.value == val)[0]?.label
  }
}

export const vehicleStyleTypeEnums = [
  { value: 'FUEL', label: '燃油' },
  { value: 'EV', label: '纯电动' },
  { value: 'HEV', label: '混动' },
  { value: 'PHEV', label: '插电式混合动力' }
]


export const vehicleTypesEnums = [
  { value: 'CUSTOMER', label: '客户车' },
  { value: 'TESTING', label: '试验车' },
  { value: 'OFFICIAL', label: '公务车' },
  { value: 'SHOW_CAR', label: '展车' },
  { value: 'EXPERIENCE_CAR', label: '试乘试驾车' },
  { value: 'FACTORY_CAR', label: '工厂车' },
  { value: 'DEALER_CAR', label: '经销商' },
  { value: 'BENCH_CAR', label: '台架车' },
  { value: 'OVERSEAS_CAR', label: '海外车' }
]