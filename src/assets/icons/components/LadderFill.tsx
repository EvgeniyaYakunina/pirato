import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLadderFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#ladder-fill_svg__a)"><path fill="#000" d="m13.47 13.329-3.188-8.766L10.85 3h.65a.5.5 0 1 0 0-1h-6a.5.5 0 0 0 0 1h.286L2.03 13.329a.5.5 0 1 0 .94.342L3.577 12h2.938l-.484 1.329a.5.5 0 0 0 .939.342L8.125 10.5h3.25l1.153 3.17a.5.5 0 1 0 .942-.341M6.837 4h1.875a.5.5 0 0 1 0 1H6.837a.5.5 0 0 1 0-1m.054 6H5.019a.5.5 0 0 1 0-1h1.875a.5.5 0 0 1 0 1zm.908-2.5H5.927a.5.5 0 0 1 0-1h1.875a.5.5 0 0 1 0 1zm.688 2L9.75 6.026 11.013 9.5z" /></g><defs><clipPath id="ladder-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLadderFill);
const Memo = memo(ForwardRef);
export default Memo;