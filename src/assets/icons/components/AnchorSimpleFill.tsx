import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAnchorSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#anchor-simple-fill_svg__a)"><path fill="#000" d="M14.5 7.5a6.5 6.5 0 1 1-13 0A.5.5 0 0 1 2 7h1.5a.5.5 0 1 1 0 1h-.977A5.51 5.51 0 0 0 7.5 12.977v-7.3a1.75 1.75 0 1 1 1 0v7.3A5.51 5.51 0 0 0 13.477 8H12.5a.5.5 0 0 1 0-1H14a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="anchor-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAnchorSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;