import React, { useEffect } from "react";

export default function Log({ setSelectedLink, link }) {
  useEffect(() => {
    setSelectedLink(link);
  }, []);
  return <div>Log</div>;
}
