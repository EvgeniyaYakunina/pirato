import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSubsetOfFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#subset-of-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2 9.5H5a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1m-4-3h4a.5.5 0 0 1 0 1H7a2.5 2.5 0 1 1 0-5h4a.5.5 0 0 1 0 1H7a1.5 1.5 0 0 0 0 3" /></g><defs><clipPath id="subset-of-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSubsetOfFill);
const Memo = memo(ForwardRef);
export default Memo;