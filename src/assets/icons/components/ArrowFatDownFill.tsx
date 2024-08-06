import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowFatDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-fat-down-fill_svg__a)"><path fill="#000" d="m14.354 8.854-6 6a.5.5 0 0 1-.708 0l-6-6A.5.5 0 0 1 2 8h2.5V3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5H14a.5.5 0 0 1 .354.854" /></g><defs><clipPath id="arrow-fat-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowFatDownFill);
const Memo = memo(ForwardRef);
export default Memo;