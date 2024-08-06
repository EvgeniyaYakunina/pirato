import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPiFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pi-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2.25 8.5a.75.75 0 0 0 .75-.75.5.5 0 0 1 1 0 1.75 1.75 0 0 1-3.5 0V6H7v5a.5.5 0 0 1-1 0V6h-.5A1.5 1.5 0 0 0 4 7.5a.5.5 0 1 1-1 0A2.5 2.5 0 0 1 5.5 5H12a.5.5 0 0 1 0 1h-2v3.75a.75.75 0 0 0 .75.75" /></g><defs><clipPath id="pi-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPiFill);
const Memo = memo(ForwardRef);
export default Memo;