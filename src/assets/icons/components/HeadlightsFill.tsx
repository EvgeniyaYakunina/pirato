import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHeadlightsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#headlights-fill_svg__a)"><path fill="#000" d="M10 5a.5.5 0 0 1 .5-.5H15a.5.5 0 1 1 0 1h-4.5A.5.5 0 0 1 10 5m5 5.5h-4.5a.5.5 0 0 0 0 1H15a.5.5 0 0 0 0-1m0-4h-4.5a.5.5 0 0 0 0 1H15a.5.5 0 1 0 0-1m0 2h-4.5a.5.5 0 0 0 0 1H15a.5.5 0 1 0 0-1M8 3H5.556C2.79 3 .521 5.226.5 7.962A5 5 0 0 0 5.5 13H8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" /></g><defs><clipPath id="headlights-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHeadlightsFill);
const Memo = memo(ForwardRef);
export default Memo;