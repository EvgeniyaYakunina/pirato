import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAlignLeftSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#align-left-simple-fill_svg__a)"><path fill="#000" d="M2.5 3.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 1 1 1 0M14 5H4.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1H14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" /></g><defs><clipPath id="align-left-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAlignLeftSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;