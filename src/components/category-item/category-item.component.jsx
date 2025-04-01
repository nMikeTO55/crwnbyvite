import './category-item.styles.scss';

const CategoryItem = ({category})=> {
  const  {picImage, title} = category;
  console.log('image: ', picImage ,'title: ', title);

  return (
    <div className='category-container'>
      <div className='background-image' style={{
        backgroundImage: `url(${picImage})`
        }}/>
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default CategoryItem;