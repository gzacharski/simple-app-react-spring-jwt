import React from "react";
import { Link } from "react-router-dom";

type LinkProp = {
  name: string;
  to: string;
};

export default function NavButton({ name, to }: LinkProp) {
  return (
    <div>
      <Link className="btn btn-primary btn-block m-1" to={to}>
        {name}
      </Link>
    </div>
  );
}
