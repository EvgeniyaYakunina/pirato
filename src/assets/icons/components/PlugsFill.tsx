import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPlugsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#plugs-fill_svg__a)"><path fill="#000" d="M9.354 9.354 8.207 10.5l1.147 1.146a.5.5 0 1 1-.708.708l-.396-.397-1.457 1.457a2.004 2.004 0 0 1-2.829 0l-.335-.336-1.775 1.776a.5.5 0 0 1-.708-.708l1.776-1.775-.336-.335a2 2 0 0 1 0-2.83L4.043 7.75l-.397-.396a.5.5 0 0 1 .708-.708L5.5 7.793l1.146-1.147a.5.5 0 0 1 .708.708L6.207 8.5 7.5 9.793l1.146-1.147a.5.5 0 0 1 .708.708m5.5-8.208a.5.5 0 0 0-.708 0l-1.775 1.776-.335-.336a2.003 2.003 0 0 0-2.83 0L7.75 4.043l-.396-.397a.5.5 0 1 0-.708.708l5 5a.5.5 0 1 0 .708-.708l-.397-.396 1.457-1.457a2 2 0 0 0 0-2.829l-.336-.335 1.776-1.775a.5.5 0 0 0 0-.708" /></g><defs><clipPath id="plugs-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPlugsFill);
const Memo = memo(ForwardRef);
export default Memo;