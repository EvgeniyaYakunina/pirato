import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCookingPotFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cooking-pot-fill_svg__a)"><path fill="#000" d="M5.5 3V1a.5.5 0 0 1 1 0v2a.5.5 0 1 1-1 0m2.5.5a.5.5 0 0 0 .5-.5V1a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5m2 0a.5.5 0 0 0 .5-.5V1a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5m5.9 2.2a.5.5 0 0 0-.7-.1l-1.2.9V5a.5.5 0 0 0-.5-.5h-11A.5.5 0 0 0 2 5v1.5L.8 5.6a.5.5 0 1 0-.6.8L2 7.75v3.75a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.75l1.8-1.35a.5.5 0 0 0 .1-.7" /></g><defs><clipPath id="cooking-pot-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCookingPotFill);
const Memo = memo(ForwardRef);
export default Memo;