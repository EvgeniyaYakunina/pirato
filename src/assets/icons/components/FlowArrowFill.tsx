import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFlowArrowFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#flow-arrow-fill_svg__a)"><path fill="#000" d="m15.354 5.354-2 2a.5.5 0 1 1-.708-.708L13.793 5.5H13c-2.417 0-2.912 1.187-3.539 2.692C8.816 9.742 8.083 11.5 5 11.5h-.063a2 2 0 1 1 0-1H5c2.417 0 2.912-1.188 3.539-2.693C9.187 6.257 9.917 4.5 13 4.5h.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708" /></g><defs><clipPath id="flow-arrow-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFlowArrowFill);
const Memo = memo(ForwardRef);
export default Memo;