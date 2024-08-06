import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNewspaperFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#newspaper-fill_svg__a)"><path fill="#000" d="M13.5 3h-10a1 1 0 0 0-1 1v7.5a.5.5 0 0 1-1 0v-6a.5.5 0 1 0-1 0v6.007A1.5 1.5 0 0 0 2 13h11a1.5 1.5 0 0 0 1.5-1.5V4a1 1 0 0 0-1-1M11 9.5H6a.5.5 0 1 1 0-1h5a.5.5 0 0 1 0 1m0-2H6a.5.5 0 1 1 0-1h5a.5.5 0 0 1 0 1" /></g><defs><clipPath id="newspaper-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNewspaperFill);
const Memo = memo(ForwardRef);
export default Memo;