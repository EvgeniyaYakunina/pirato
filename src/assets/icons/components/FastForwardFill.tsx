import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFastForwardFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#fast-forward-fill_svg__a)"><path fill="#000" d="M16 8a.99.99 0 0 1-.458.834l-5.512 3.51a.994.994 0 0 1-1.53-.834V9.179l-4.97 3.165A.994.994 0 0 1 2 11.51V4.49a.994.994 0 0 1 1.53-.834L8.5 6.821V4.49a.994.994 0 0 1 1.53-.834l5.512 3.51A.99.99 0 0 1 16 8" /></g><defs><clipPath id="fast-forward-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFastForwardFill);
const Memo = memo(ForwardRef);
export default Memo;