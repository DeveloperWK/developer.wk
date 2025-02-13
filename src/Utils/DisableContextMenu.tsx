"use client";
const DisableContextMenu = ({ children }: { children: React.ReactNode }) => {
  if (process.env.NODE_ENV !== "development") {
    return (
      <section onContextMenu={(e) => e.preventDefault()}>{children}</section>
    );
  } else {
    return <section>{children}</section>;
  }
};

export default DisableContextMenu;
