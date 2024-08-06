import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowUDownLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-u-down-left-fill_svg__a)"><path fill="#000" d="M14.5 7a4.005 4.005 0 0 1-4 4h-5v2.5a.5.5 0 0 1-.854.354l-3-3a.5.5 0 0 1 0-.708l3-3A.5.5 0 0 1 5.5 7.5V10h5a3 3 0 1 0 0-6H5a.5.5 0 0 1 0-1h5.5a4.005 4.005 0 0 1 4 4" /></g><defs><clipPath id="arrow-u-down-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowUDownLeftFill);
const Memo = memo(ForwardRef);
export default Memo;