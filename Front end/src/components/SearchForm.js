import React from "react";

export default function SearchForm(props) {
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCondo() {
    props.filterCondo(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          {/* <label htmlFor="name">search your favourite district</label> */}
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCondo}
            placeholder="Search Your Favourite District (from 1 to 28)"
          />
        </div>
      </form>
    </section>
  );
}
