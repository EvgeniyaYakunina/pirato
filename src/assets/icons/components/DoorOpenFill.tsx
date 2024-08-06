import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDoorOpenFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#door-open-fill_svg__a)"><path fill="#000" d="M14.5 13.5H13v-11a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11H1.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1m-4 0H4v-11h6.5zM8 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0" /></g><defs><clipPath id="door-open-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDoorOpenFill);
const Memo = memo(ForwardRef);
export default Memo;