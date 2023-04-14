function SearchBar() {
    const handleFormSubmit = () => {
        console.log('tell parent about some data')
    };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input />
      </form>
    </div>
  );
}

export default SearchBar;
