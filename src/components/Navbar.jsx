
import { useRef, useEffect } from "react";

const Navbar = ({ search, setSearch }) => {
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus(); 
  }, []);

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by name or address"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        ref={searchRef} 
      />
    </div>
  );
};

export default Navbar;
