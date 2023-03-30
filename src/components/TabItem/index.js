import './index.css'

const TabItem = props => {
  const {tabItemObject, onClickOnTabItem, isTabActive} = props
  const {tabId, displayText} = tabItemObject
  const onClickTabItem = () => {
    onClickOnTabItem(tabId)
  }
  const applyActiveStatusBar = isTabActive ? 'status-bar' : ''

  return (
    <li className="tab-list-item">
      <button
        className={`button ${applyActiveStatusBar}`}
        type="submit"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
