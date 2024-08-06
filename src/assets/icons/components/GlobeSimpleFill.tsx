import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGlobeSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#globe-simple-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m5.476 6h-2.49c-.111-2.282-.99-3.896-1.71-4.85a5.51 5.51 0 0 1 4.2 4.85m-7.462 1h3.972C9.84 11.1 8.596 12.694 8 13.313c-.597-.62-1.841-2.213-1.986-4.813m0-1C6.16 4.9 7.404 3.306 8 2.688c.597.62 1.841 2.214 1.986 4.812zm3.262 5.85c.72-.954 1.597-2.568 1.71-4.85h2.49a5.51 5.51 0 0 1-4.2 4.85" /></g><defs><clipPath id="globe-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGlobeSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;