
/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
import moment from 'moment'
export function parseTime (time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  if (!time) return '--'
  return moment(time).format('YYYY-MM-DD HH:mm:ss') || '--'
}