import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBookmarkFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bookmark-fill_svg__a)"><path fill="#000" d="M11.5 2h-7a1 1 0 0 0-1 1v11a.5.5 0 0 0 .765.424L8 12.089l3.736 2.335A.5.5 0 0 0 12.5 14V3a1 1 0 0 0-1-1m-3.236 9.076a.5.5 0 0 0-.53 0L4.5 13.098v-1.821L8 9.089l3.5 2.188v1.821z" /></g><defs><clipPath id="bookmark-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBookmarkFill);
const Memo = memo(ForwardRef);
export default Memo;