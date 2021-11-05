import React, { memo } from "react";

const Avatar = memo(({ url }) => (
  <div>
    {!!url ? (
      <img src={url} alt="avatar" className="avatar-img" />
    ) : (
      <div className="avatar-txt">T</div>
    )}
  </div>
));

export default Avatar;
