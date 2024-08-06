import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGridFourFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#grid-four-fill_svg__a)"><path fill="#000" d="M13.5 3.5v3.75a.25.25 0 0 1-.25.25H8.5V2.75a.25.25 0 0 1 .25-.25h3.75a1 1 0 0 1 1 1m-6.25-1H3.5a1 1 0 0 0-1 1v3.75a.25.25 0 0 0 .25.25H7.5V2.75a.25.25 0 0 0-.25-.25m6 6H8.5v4.75a.25.25 0 0 0 .25.25h3.75a1 1 0 0 0 1-1V8.75a.25.25 0 0 0-.25-.25M2.5 8.75v3.75a1 1 0 0 0 1 1h3.75a.25.25 0 0 0 .25-.25V8.5H2.75a.25.25 0 0 0-.25.25" /></g><defs><clipPath id="grid-four-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGridFourFill);
const Memo = memo(ForwardRef);
export default Memo;