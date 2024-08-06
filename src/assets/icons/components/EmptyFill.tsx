import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEmptyFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#empty-fill_svg__a)"><path fill="#000" d="M10.656 5.724a3.5 3.5 0 0 1-4.56 5.214zM8 4.5a3.5 3.5 0 0 0-2.656 5.776l4.563-5.211A3.5 3.5 0 0 0 8 4.5M14.5 8A6.5 6.5 0 1 1 8 1.5 6.51 6.51 0 0 1 14.5 8m-2 0a4.48 4.48 0 0 0-1.18-3.034l.305-.387a.499.499 0 1 0-.75-.658l-.307.386a4.5 4.5 0 0 0-5.887 6.727l-.306.387a.5.5 0 0 0 .75.658l.307-.386A4.497 4.497 0 0 0 12.5 8" /></g><defs><clipPath id="empty-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgEmptyFill);
const Memo = memo(ForwardRef);
export default Memo;