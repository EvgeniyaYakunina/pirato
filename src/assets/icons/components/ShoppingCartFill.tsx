import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShoppingCartFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#shopping-cart-fill_svg__a)"><path fill="#000" d="M14.384 3.68A.5.5 0 0 0 14 3.5H3.918l-.38-2.09A.5.5 0 0 0 3.046 1H1.5a.5.5 0 1 0 0 1h1.125l1.598 8.768a1.5 1.5 0 0 0 .333.704A1.75 1.75 0 1 0 7.33 12h2.838a1.75 1.75 0 1 0 1.58-1H5.7a.5.5 0 0 1-.493-.41L5.008 9.5h7.25a1.5 1.5 0 0 0 1.476-1.232l.76-4.179a.5.5 0 0 0-.11-.41M6.5 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0" /></g><defs><clipPath id="shopping-cart-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgShoppingCartFill);
const Memo = memo(ForwardRef);
export default Memo;