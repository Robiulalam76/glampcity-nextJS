import React from "react";
import { useRouter } from "next/router";

function SindgleItem() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      SindgleItem : {id}
      locallhost, unspan
    </div>
  );
}

export default SindgleItem;
