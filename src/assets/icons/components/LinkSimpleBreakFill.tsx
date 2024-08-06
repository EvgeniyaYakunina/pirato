import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLinkSimpleBreakFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#link-simple-break-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-3.965 8.854-1.34 1.34a2.75 2.75 0 0 1-3.89-3.888l1.341-1.342a.5.5 0 1 1 .708.707L4.513 9.012a1.75 1.75 0 1 0 2.475 2.476l1.34-1.342a.5.5 0 0 1 .707.708m3.16-3.16-1.341 1.341a.5.5 0 0 1-.708-.707l1.342-1.34a1.75 1.75 0 0 0-2.476-2.476l-1.34 1.342a.5.5 0 1 1-.708-.708l1.342-1.34a2.75 2.75 0 0 1 3.888 3.888" /></g><defs><clipPath id="link-simple-break-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLinkSimpleBreakFill);
const Memo = memo(ForwardRef);
export default Memo;