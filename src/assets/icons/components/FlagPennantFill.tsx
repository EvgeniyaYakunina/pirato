import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFlagPennantFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#flag-pennant-fill_svg__a)"><path fill="#000" d="M15.5 6.5a.5.5 0 0 1-.336.472L4 10.855V13.5a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .664-.473l11.5 4a.5.5 0 0 1 .336.473" /></g><defs><clipPath id="flag-pennant-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFlagPennantFill);
const Memo = memo(ForwardRef);
export default Memo;