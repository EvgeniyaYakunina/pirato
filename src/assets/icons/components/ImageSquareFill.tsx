import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgImageSquareFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#image-square-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M3 3h10v4.836l-1.543-1.543a1 1 0 0 0-1.414 0L3.336 13H3zm2 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0" /></g><defs><clipPath id="image-square-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgImageSquareFill);
const Memo = memo(ForwardRef);
export default Memo;