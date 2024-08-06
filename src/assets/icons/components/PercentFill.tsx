import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPercentFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#percent-fill_svg__a)"><path fill="#000" d="M11 10.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M5.75 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M14 3v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1M4 5.25a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0m8 5.5a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0m-.146-6.604a.5.5 0 0 0-.708 0l-7 7a.5.5 0 0 0 .708.708l7-7a.5.5 0 0 0 0-.708" /></g><defs><clipPath id="percent-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPercentFill);
const Memo = memo(ForwardRef);
export default Memo;