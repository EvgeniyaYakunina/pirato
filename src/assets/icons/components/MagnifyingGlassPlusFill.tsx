import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMagnifyingGlassPlusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#magnifying-glass-plus-fill_svg__a)"><path fill="#000" d="m14.354 13.646-3.129-3.129a5.513 5.513 0 1 0-.707.707l3.128 3.13a.501.501 0 0 0 .708-.708M9 7.5H7.5V9a.5.5 0 0 1-1 0V7.5H5a.5.5 0 1 1 0-1h1.5V5a.5.5 0 0 1 1 0v1.5H9a.5.5 0 1 1 0 1" /></g><defs><clipPath id="magnifying-glass-plus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMagnifyingGlassPlusFill);
const Memo = memo(ForwardRef);
export default Memo;