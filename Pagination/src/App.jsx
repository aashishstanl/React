import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, settotalPage] = useState(0);

  const fetchProduct = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const fetchedData = await response.json();
    console.log(fetchedData);
    if (fetchedData && fetchedData.products) {
      setProduct(fetchedData.products);
      //setting up pages to display on 1 page to iterate : 10 pages link reference on 1 page
      settotalPage(fetchedData.total / 10);
    }
  };
  // we are fetching the data whenever the page is changing
  useEffect(() => {
    fetchProduct();
  }, [page]);

  //handling the page changing span button
  const selectedPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <>
      <div>
        {products.length > 0 && (
          <div className="products">
            {/* iterating the each page with total 10 items per page */}
            {products.map((products) => {
              return (
                <span className="products__single" key={products.id}>
                  <img src={products.thumbnail} alt={products.title} />
                  <span>{products.title}</span>
                </span>
              );
            })}
          </div>
        )}

        {/* adding the page number section */}
        {products.length > 0 && (
          <div className="pagination">
            {/* disable the preview button when at 1st page */}
            <span
              className={page === 1 ? "pagination__disabled" : ""}
              onClick={() => selectedPageHandler(page - 1)}
            >
              ◀
            </span>
            {[...Array(totalPages)].map((_, i) => {
              // displaying number of pages
              return (
                <span
                  className={page === i + 1 ? "pagination__selected" : ""}
                  onClick={() => selectedPageHandler(i + 1)}
                  key={i}
                >
                  {i + 1}
                </span>
              );
            })}
            {/* disable the next button when at last page */}
            <span
              className={page < totalPages ? "" : "pagination__disabled"}
              onClick={() => selectedPageHandler(page + 1)}
            >
              ▶
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
