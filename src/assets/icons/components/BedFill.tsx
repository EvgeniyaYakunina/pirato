import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBedFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bed-fill_svg__a)"><path fill="#000" d="M13.5 4.5H2V3a.5.5 0 1 0-1 0v10a.5.5 0 0 0 1 0v-2h13v2a.5.5 0 0 0 1 0V7a2.5 2.5 0 0 0-2.5-2.5M2 5.5h4.5V10H2z" /></g><defs><clipPath id="bed-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBedFill);
const Memo = memo(ForwardRef);
export default Memo;