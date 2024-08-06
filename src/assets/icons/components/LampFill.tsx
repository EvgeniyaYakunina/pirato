import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLampFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#lamp-fill_svg__a)"><path fill="#000" d="M15.418 9.775A.5.5 0 0 1 15 10h-2v2a.5.5 0 0 1-1 0v-2H8.5v3H10a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1h1.5v-3H1a.5.5 0 0 1-.46-.697l3-7A.5.5 0 0 1 4 2h8a.5.5 0 0 1 .46.303l3 7a.5.5 0 0 1-.043.472" /></g><defs><clipPath id="lamp-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLampFill);
const Memo = memo(ForwardRef);
export default Memo;