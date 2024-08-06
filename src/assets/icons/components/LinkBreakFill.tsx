import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLinkBreakFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#link-break-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M6 4a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0zM4 6h1a.5.5 0 1 1 0 1H4a.5.5 0 1 1 0-1m4.005 5.354-.45.45a2.375 2.375 0 1 1-3.36-3.358l.451-.451a.5.5 0 0 1 .708.707l-.452.45a1.375 1.375 0 0 0 1.946 1.946l.45-.452a.5.5 0 0 1 .707.708M10 12a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0zm2-2h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1m-.196-2.446-.45.451a.5.5 0 0 1-.708-.707l.451-.45a1.375 1.375 0 0 0-1.944-1.945l-.451.45a.5.5 0 1 1-.707-.707l.45-.45a2.375 2.375 0 1 1 3.36 3.358" /></g><defs><clipPath id="link-break-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLinkBreakFill);
const Memo = memo(ForwardRef);
export default Memo;