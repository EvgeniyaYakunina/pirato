import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSquareSplitVerticalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#square-split-vertical-fill_svg__a)"><path fill="#000" d="M13.5 3.5v3.75a.25.25 0 0 1-.25.25H2.75a.25.25 0 0 1-.25-.25V3.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1m-.25 5H2.75a.25.25 0 0 0-.25.25v3.75a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8.75a.25.25 0 0 0-.25-.25" /></g><defs><clipPath id="square-split-vertical-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSquareSplitVerticalFill);
const Memo = memo(ForwardRef);
export default Memo;