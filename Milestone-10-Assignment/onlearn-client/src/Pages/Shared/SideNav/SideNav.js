import React, { useState } from "react";
import { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/datas/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <ListGroup as="ul">
        {categories.map((category) => (
          <ListGroup.Item key={category.id} as="li">
            <NavLink
              to={`/courses/categories/${category.name}`}
              className={"p-4 text-decoration-none capitalize"}
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
