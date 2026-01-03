// src/components/Navbar.jsx (or wherever your search input is)
import { useRef, useEffect } from "react";

const Navbar = ({ search, setSearch }) => {
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus(); // Auto-focus search input
  }, []);

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by name or address"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        ref={searchRef} // attach ref
      />
    </div>
  );
};

export default Navbar;
