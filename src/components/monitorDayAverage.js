import { locations } from '../functions/locations'

export default function MonitorDayAverage({ location, avg }) {
  return (
    <>
      <br />
      <small>
        {locations[location] || location} 监测节点: {avg}ms平均响应时间
      </small>
    </>
  )
}
