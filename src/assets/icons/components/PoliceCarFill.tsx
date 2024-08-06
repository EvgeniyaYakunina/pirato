import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPoliceCarFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#police-car-fill_svg__a)"><path fill="#000" d="M6 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5M15.5 7a.5.5 0 0 1-.5.5h-.5v5a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1V12H5v.5a1 1 0 0 1-1 1H2.5a1 1 0 0 1-1-1v-5H1a.5.5 0 0 1 0-1h.71l1.712-2.996A1 1 0 0 1 4.29 3h7.42a1 1 0 0 1 .868.504L14.29 6.5H15a.5.5 0 0 1 .5.5m-10 2a.5.5 0 0 0-.5-.5H3.5a.5.5 0 1 0 0 1H5a.5.5 0 0 0 .5-.5M13 9a.5.5 0 0 0-.5-.5H11a.5.5 0 0 0 0 1h1.5A.5.5 0 0 0 13 9m.138-2.5L11.71 4H4.29L2.862 6.5z" /></g><defs><clipPath id="police-car-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPoliceCarFill);
const Memo = memo(ForwardRef);
export default Memo;