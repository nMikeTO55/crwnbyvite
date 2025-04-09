import './directory-item.styles.scss';

const DirectoryItem = ({category})=> {
  const  {picImage, title} = category;

  return (
    <div className='directory-item-container'>
      <div className='background-image' style={{
        backgroundImage: `url(${picImage})`
        }}/>
      <div className='body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default DirectoryItem;