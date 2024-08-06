import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowUpLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-up-left-fill_svg__a)"><path fill="#000" d="M12.354 12.354a.503.503 0 0 1-.708 0L7.25 7.957l-2.896 2.897A.5.5 0 0 1 3.5 10.5V4a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 .354.854L7.957 7.25l4.397 4.396a.503.503 0 0 1 0 .708" /></g><defs><clipPath id="arrow-up-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowUpLeftFill);
const Memo = memo(ForwardRef);
export default Memo;