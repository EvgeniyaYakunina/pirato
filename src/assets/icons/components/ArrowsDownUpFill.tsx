import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowsDownUpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrows-down-up-fill_svg__a)"><path fill="#000" d="M7.462 10.809a.5.5 0 0 1-.108.545l-2 2a.5.5 0 0 1-.708 0l-2-2A.5.5 0 0 1 3 10.5h1.5V3a.5.5 0 1 1 1 0v7.5H7a.5.5 0 0 1 .462.309m5.892-6.163-2-2a.5.5 0 0 0-.708 0l-2 2A.5.5 0 0 0 9 5.5h1.5V13a.5.5 0 0 0 1 0V5.5H13a.5.5 0 0 0 .354-.854" /></g><defs><clipPath id="arrows-down-up-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowsDownUpFill);
const Memo = memo(ForwardRef);
export default Memo;