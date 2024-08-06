import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextItalicFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#text-italic-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2 3H9.602L7.46 11H8.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h1.398L8.54 5H7.5a.5.5 0 1 1 0-1H11a.5.5 0 0 1 0 1" /></g><defs><clipPath id="text-italic-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTextItalicFill);
const Memo = memo(ForwardRef);
export default Memo;