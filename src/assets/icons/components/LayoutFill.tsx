import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLayoutFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#layout-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-11 1h11V6h-11zm11 9H7V7h6.5z" /></g><defs><clipPath id="layout-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLayoutFill);
const Memo = memo(ForwardRef);
export default Memo;