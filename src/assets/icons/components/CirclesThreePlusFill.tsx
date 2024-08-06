import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCirclesThreePlusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#circles-three-plus-fill_svg__a)"><path fill="#000" d="M7.5 5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M11 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-6 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m8 2h-1.5V9a.5.5 0 0 0-1 0v1.5H9a.5.5 0 0 0 0 1h1.5V13a.5.5 0 0 0 1 0v-1.5H13a.5.5 0 0 0 0-1" /></g><defs><clipPath id="circles-three-plus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCirclesThreePlusFill);
const Memo = memo(ForwardRef);
export default Memo;