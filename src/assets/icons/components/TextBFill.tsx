import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextBFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#text-b-fill_svg__a)"><path fill="#000" d="M10.5 9.75A1.25 1.25 0 0 1 9.25 11H6V8.5h3.25a1.25 1.25 0 0 1 1.25 1.25M14 3v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1m-2.5 6.75a2.25 2.25 0 0 0-1.125-1.947A2.25 2.25 0 0 0 8.75 4H5.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.75a2.25 2.25 0 0 0 2.25-2.25M10 6.25A1.25 1.25 0 0 0 8.75 5H6v2.5h2.75A1.25 1.25 0 0 0 10 6.25" /></g><defs><clipPath id="text-b-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTextBFill);
const Memo = memo(ForwardRef);
export default Memo;