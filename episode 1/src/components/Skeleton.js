// Generic skeleton block - the same idea as shadcn/ui's <Skeleton />,
// written in plain CSS since this project has no Tailwind.
// Give it a size through a className (or an inline style) and it renders
// a shimmering placeholder of that shape.
const Skeleton = ({ className = "", ...props }) => (
  <div className={`skeleton ${className}`} {...props} />
);

export default Skeleton;
