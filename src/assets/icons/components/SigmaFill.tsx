import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSigmaFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#sigma-fill_svg__a)"><path fill="#000" d="M12.5 1.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-1 4a.5.5 0 0 1-1 0v-1H6l2.4 3.2a.5.5 0 0 1 0 .6L6 11.5h4.5v-1a.5.5 0 0 1 1 0V12a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.4-.8L7.375 8 4.6 4.3a.5.5 0 0 1 .4-.8h6a.5.5 0 0 1 .5.5z" /></g><defs><clipPath id="sigma-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSigmaFill);
const Memo = memo(ForwardRef);
export default Memo;