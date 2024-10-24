import { useState } from "react";

export const Expandable_textComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <p>
        {isExpanded
          ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quod vero provident amet corrupti iste soluta fugiat officia reiciendis voluptas quam quibusdam ut consectetur, cum ab? Doloremque a porro qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorem cupiditate nulla, soluta exercitationem autem sit minus nostrum excepturi fugiat ut libero architecto at molestias explicabo doloribus ipsa, consectetur similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit hic aspernatur ad quasi, laudantium eaque veritatis aut corporis architecto recusandae reprehenderit totam. Eligendi eveniet atque ad tempora. Voluptate, fugiat?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus optio temporibus exercitationem consequuntur officiis nisi a qui dolores molestias quisquam sunt vero dolore, omnis harum eveniet aspernatur nobis quasi necessitatibus.lore"
          : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quod vero provident amet corrupti iste soluta fugiat officia reiciendis voluptas quam quibusdam ut consectetur, cum ab? Doloremque a porro qui..."}
      </p>
      <button onClick={toggleExpand}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </>
  );
};
 