import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [data, setData] = useState([]);
  const [product,setProduct]=useState([])

  const getData = async () => {
    try {
      let record = await axios.get("https://dummyjson.com/image/150");
      setData(record.data.products);
      fetch('https://dummyjson.com/carts')
      .then(res=>res.json())
      .then(res=>{
        setProduct(res.carts);
      })
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <div>
        <h1 align="center" className="my-4">Products</h1>
        <div className="container">
          <div className="row">
            {
              data.map((val) => {
                return (
                  <div className="col-lg-3 mt-3" key={val.id}>
                    <div className="card" style={{ width: '18rem',height:'35rem',textAlign:'justify' }}>
                      <img src={val.thumbnail} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Product Name :- {val.category}</h5>
                        <p className="card-text">{val.description}</p>
                        <a href="#" className="btn btn-success mx-auto d-block">Buy :- {val.price}</a>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div>
        <h1 align="center" className="mt-5">Carts</h1>
        <div className="container mt-5">
          <div className="row">
<table className="table border">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">quantity</th>
      <th scope="col">total</th>
    </tr>
  </thead>
  <tbody>
   {
    product.map((val)=>{
      return(
        <tr key={val.id}>
          <td>{val.id}</td>
          <td>{val.products[0].title}</td>
          <td>{val.products[0].price}</td>
          <td>{val.products[0].quantity}</td>
          <td>{val.products[0].total}</td>
        </tr>
      )
    })
   }
  </tbody>
</table>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
