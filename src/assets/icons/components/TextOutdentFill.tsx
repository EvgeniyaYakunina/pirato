import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextOutdentFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#text-outdent-fill_svg__a)"><path fill="#000" d="M14 8a.5.5 0 0 1-.5.5H7a.5.5 0 0 1 0-1h6.5a.5.5 0 0 1 .5.5M7 4.5h6.5a.5.5 0 0 0 0-1H7a.5.5 0 1 0 0 1m6.5 7h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1M4.5 9a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.854-.354l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5A.5.5 0 0 0 4.5 9" /></g><defs><clipPath id="text-outdent-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTextOutdentFill);
const Memo = memo(ForwardRef);
export default Memo;