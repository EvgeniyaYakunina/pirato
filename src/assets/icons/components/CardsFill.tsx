import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCardsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g fill="#000" clipPath="url(#cards-fill_svg__a)"><path d="M11.5 4.5h-9a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1" /><path d="M13.5 2.5H4a.5.5 0 1 0 0 1h9.5V11a.5.5 0 0 0 1 0V3.5a1 1 0 0 0-1-1" /></g><defs><clipPath id="cards-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCardsFill);
const Memo = memo(ForwardRef);
export default Memo;