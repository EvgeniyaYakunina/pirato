import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBookmarkSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bookmark-simple-fill_svg__a)"><path fill="#000" d="M11.5 2h-7a1 1 0 0 0-1 1v11a.5.5 0 0 0 .765.424L8 12.089l3.736 2.335A.5.5 0 0 0 12.5 14V3a1 1 0 0 0-1-1" /></g><defs><clipPath id="bookmark-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBookmarkSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;