// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabDetails, getTab, isActive} = props
  const {displayText, tabId} = eachTabDetails

  const onGetTabApps = () => {
    getTab(tabId)
  }

  const activeTabClassName = isActive ? 'button active-button' : 'button'

  return (
    <li>
      <button
        className={activeTabClassName}
        type="button"
        onClick={onGetTabApps}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
