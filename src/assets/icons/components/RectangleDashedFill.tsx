import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRectangleDashedFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#rectangle-dashed-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1M5 12H4a1 1 0 0 1-1-1V9a.5.5 0 1 1 1 0v2h1a.5.5 0 0 1 0 1m0-7H4v2a.5.5 0 1 1-1 0V5a1 1 0 0 1 1-1h1a.5.5 0 1 1 0 1m4 7H7a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1m0-7H7a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1m4 6a1 1 0 0 1-1 1h-1a.5.5 0 0 1 0-1h1V9a.5.5 0 0 1 1 0zm0-4a.5.5 0 0 1-1 0V5h-1a.5.5 0 0 1 0-1h1a1 1 0 0 1 1 1z" /></g><defs><clipPath id="rectangle-dashed-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgRectangleDashedFill);
const Memo = memo(ForwardRef);
export default Memo;