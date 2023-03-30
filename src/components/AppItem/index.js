import './index.css'

const AppItem = props => {
  const {categoryObject} = props
  const {appName, imageUrl} = categoryObject

  return (
    <li className="category-list-item">
      <img src={imageUrl} className="category-image" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
