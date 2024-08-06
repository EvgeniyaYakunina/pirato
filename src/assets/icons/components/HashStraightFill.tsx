import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHashStraightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hash-straight-fill_svg__a)"><path fill="#000" d="M7 7h2v2H7zm7-4v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1m-4 6V7h2a.5.5 0 0 0 0-1h-2V4a.5.5 0 1 0-1 0v2H7V4a.5.5 0 1 0-1 0v2H4a.5.5 0 1 0 0 1h2v2H4a.5.5 0 1 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1z" /></g><defs><clipPath id="hash-straight-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHashStraightFill);
const Memo = memo(ForwardRef);
export default Memo;