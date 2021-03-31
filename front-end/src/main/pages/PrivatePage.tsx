import React from "react";
import { authWrapper } from "src/main/auth";

export const PrivatePage = authWrapper(() => {
  return <div>This is private page</div>;
});
