import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSwapFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#swap-fill_svg__a)"><path fill="#000" d="M14 3v6.5a1 1 0 0 1-1 1H7v1a.5.5 0 0 1-.854.354l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5A.5.5 0 0 1 7 8.5v1h6V3H6v.5a.5.5 0 1 1-1 0V3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1m-3.5 9a.5.5 0 0 0-.5.5v.5H3V6.5h6v1a.5.5 0 0 0 .854.354l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5A.5.5 0 0 0 9 4.5v1H3a1 1 0 0 0-1 1V13a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-.5a.5.5 0 0 0-.5-.5" /></g><defs><clipPath id="swap-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSwapFill);
const Memo = memo(ForwardRef);
export default Memo;