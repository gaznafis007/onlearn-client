import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useCol } from "react-bootstrap/esm/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const SideNav = () => {
  const { dark } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://onlearn-server.vercel.app/datas/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <ListGroup as="ul">
        {categories.map((category) => (
          <ListGroup.Item
            className={`p-4 ${dark ? "bg-dark" : "bg-white"}`}
            key={category.id}
            as="li"
          >
            <NavLink
              to={`/courses/categories/${category.name}`}
              className={`text-decoration-none text-capitalize ${
                dark ? "text-white" : "text-primary"
              }`}
            >
              {({ isActive }) => (
                <span
                  className={
                    isActive ? "bg-primary text-white p-2 rounded" : undefined
                  }
                >
                  {category.name}
                </span>
              )}
            </NavLink>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default SideNav;
