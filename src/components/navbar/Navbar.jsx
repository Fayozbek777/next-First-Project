import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        width: "450px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "50px",

        marginLeft: "850px",
        marginTop: "45px",
        fontSize: "40px",
      }}
    >
      <Link href={"/"}>Home</Link>
      <Link href={"/products"}>Products</Link>
      <Link href={"/contact"}>Contact</Link>
    </nav>
  );
};

export default Navbar;
