import React from "react";

export default function GifItem(result) {

  let item = result.item;

  return (
    <div className='flexItem'>
        <img height={100} width={100} src={item.images.fixed_height.url} />
    </div>
  );
}
