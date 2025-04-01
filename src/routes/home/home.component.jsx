import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

const Home = ()=>{
  const categories = [
    {
      id: 1,
      title: 'hats',
      picImage: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
      id: 2,
      title: 'jackets',
      picImage: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      id: 3,
      title: 'sneakers',
      picImage: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      id: 4,
      title: 'womens',
      picImage: 'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
      id: 5,
      title: 'mens',
      picImage: 'https://i.ibb.co/R70vBrQ/men.png'
    }
  ];

  return (
    <div> 
      <Directory categories={categories} />
      <Outlet />
    </div>
  )
}

export default Home;
