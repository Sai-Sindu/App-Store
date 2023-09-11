// Write your code here
import './index.css'

const AppItem = props => {
  const {eachAppListDetails} = props
  const {appName, imageUrl} = eachAppListDetails
  return (
    <li className="app-item-card">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
