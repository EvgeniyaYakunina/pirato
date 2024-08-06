import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBirdFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bird-fill_svg__a)"><path fill="#000" d="m14.778 4.584-1.452-.968A3.75 3.75 0 0 0 9.75 1h-.018C7.674 1.01 6 2.717 6 4.806v1.233L.727 12.368l-.006.007A1 1 0 0 0 1.5 14H7a6.507 6.507 0 0 0 6.5-6.5V6.268l1.277-.852a.5.5 0 0 0 0-.832M7.884 8.32l-3.75 4.5a.5.5 0 1 1-.768-.64l3.75-4.5a.5.5 0 1 1 .768.64M10.25 5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="bird-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBirdFill);
const Memo = memo(ForwardRef);
export default Memo;