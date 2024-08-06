import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShoppingCartSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#shopping-cart-simple-fill_svg__a)"><path fill="#000" d="M14.982 4.634 13.379 10.4a1.504 1.504 0 0 1-1.441 1.099H5.76a1.5 1.5 0 0 1-1.447-1.099L2.12 2.5H1a.5.5 0 0 1 0-1h1.5a.5.5 0 0 1 .482.366L3.574 4H14.5a.5.5 0 0 1 .482.634M5.5 12.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6.5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></g><defs><clipPath id="shopping-cart-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgShoppingCartSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;