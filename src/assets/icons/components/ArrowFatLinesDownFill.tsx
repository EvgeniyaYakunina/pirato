import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowFatLinesDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-fat-lines-down-fill_svg__a)"><path fill="#000" d="m14.354 8.854-6 6a.5.5 0 0 1-.708 0l-6-6A.5.5 0 0 1 2 8h2.5V6.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 .5.5V8H14a.5.5 0 0 1 .354.854M11.5 2.5A.5.5 0 0 0 11 2H5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 .5-.5m0 2A.5.5 0 0 0 11 4H5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 .5-.5" /></g><defs><clipPath id="arrow-fat-lines-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowFatLinesDownFill);
const Memo = memo(ForwardRef);
export default Memo;