import React from "react";

import Button from "../../../../shared/button";

type Props = {};

const AddToCart: React.FC<Props> = ({ ...props }) => {
  const {} = props;
  return <Button onPress={() => "s"}>Add to Cart</Button>;
};

export default AddToCart;
