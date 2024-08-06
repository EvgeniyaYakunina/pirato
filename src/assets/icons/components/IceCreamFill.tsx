import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgIceCreamFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#ice-cream-fill_svg__a)"><path fill="#000" d="M13 6.086V6A5 5 0 0 0 3 6v.086A1.5 1.5 0 0 0 3.5 9h.206l3.426 5.996a1 1 0 0 0 1.736 0L12.294 9h.206a1.5 1.5 0 0 0 .5-2.914m-3.82 6.348L7.22 9h1.205l1.36 2.379zM4.858 9h1.21l2.538 4.441L8 14.5zm5.5 1.371L9.576 9h1.567z" /></g><defs><clipPath id="ice-cream-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgIceCreamFill);
const Memo = memo(ForwardRef);
export default Memo;