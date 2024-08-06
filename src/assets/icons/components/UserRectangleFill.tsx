import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUserRectangleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#user-rectangle-fill_svg__a)"><path fill="#000" d="M10.75 7.5a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0m3.75-4v9a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1m-1 9v-9h-11v9h.918a5 5 0 0 1 1.838-2.177.25.25 0 0 1 .301.019 3.74 3.74 0 0 0 4.886 0 .25.25 0 0 1 .301-.02 5 5 0 0 1 1.838 2.178z" /></g><defs><clipPath id="user-rectangle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgUserRectangleFill);
const Memo = memo(ForwardRef);
export default Memo;