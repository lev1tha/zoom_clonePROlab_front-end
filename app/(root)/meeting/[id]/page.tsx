import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return <div>Meeting Room #{params.id}</div>;
};

export default page;
