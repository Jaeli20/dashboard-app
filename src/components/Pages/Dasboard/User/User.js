import React, { useEffect } from "react";

export default function User({ setSelectedLink, link }) {
  useEffect(() => {
    setSelectedLink(link);
  }, []);
  return (
    <div>User</div>
  )
}
