import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSquareSplitHorizontalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#square-split-horizontal-fill_svg__a)"><path fill="#000" d="M7.5 2.75v10.5a.25.25 0 0 1-.25.25H3.5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3.75a.25.25 0 0 1 .25.25m5-.25H8.75a.25.25 0 0 0-.25.25v10.5a.25.25 0 0 0 .25.25h3.75a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1" /></g><defs><clipPath id="square-split-horizontal-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSquareSplitHorizontalFill);
const Memo = memo(ForwardRef);
export default Memo;