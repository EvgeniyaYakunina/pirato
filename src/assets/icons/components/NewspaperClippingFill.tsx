import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNewspaperClippingFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#newspaper-clipping-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v10a.5.5 0 0 0 .724.447L4 13.059l1.776.888a.5.5 0 0 0 .448 0L8 13.059l1.776.888a.5.5 0 0 0 .448 0L12 13.059l1.776.888a.5.5 0 0 0 .724-.447v-10a1 1 0 0 0-1-1M7.25 10a.25.25 0 0 1-.25.25H4a.25.25 0 0 1-.25-.25V6A.25.25 0 0 1 4 5.75h3a.25.25 0 0 1 .25.25zM12 9.5H9a.5.5 0 1 1 0-1h3a.5.5 0 0 1 0 1m0-2H9a.5.5 0 1 1 0-1h3a.5.5 0 0 1 0 1" /></g><defs><clipPath id="newspaper-clipping-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNewspaperClippingFill);
const Memo = memo(ForwardRef);
export default Memo;