import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowULeftDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-u-left-down-fill_svg__a)"><path fill="#000" d="M13 5.5V11a.5.5 0 0 1-1 0V5.5a3 3 0 0 0-6 0v5h2.5a.5.5 0 0 1 .354.854l-3 3a.5.5 0 0 1-.708 0l-3-3A.5.5 0 0 1 2.5 10.5H5v-5a4 4 0 1 1 8 0" /></g><defs><clipPath id="arrow-u-left-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowULeftDownFill);
const Memo = memo(ForwardRef);
export default Memo;