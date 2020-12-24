var Mock = require('mockjs')
import VehicleWhiteList from './aa.json'

Mock.mock('/smpbapi/vehicleManage/getVehicleWhiteList',VehicleWhiteList)