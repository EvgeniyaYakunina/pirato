import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRadicalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#radical-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m0 5a.5.5 0 0 1-1 0v-.5H7.839l-1.875 4.688a.5.5 0 0 1-.929 0l-2-5a.501.501 0 1 1 .93-.375L5.5 9.653l1.536-3.84A.5.5 0 0 1 7.5 5.5h5a.5.5 0 0 1 .5.5z" /></g><defs><clipPath id="radical-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgRadicalFill);
const Memo = memo(ForwardRef);
export default Memo;