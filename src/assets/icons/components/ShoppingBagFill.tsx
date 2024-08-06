import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShoppingBagFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#shopping-bag-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1M8 8.5a3.003 3.003 0 0 1-3-3 .5.5 0 1 1 1 0 2 2 0 1 0 4 0 .5.5 0 0 1 1 0 3.003 3.003 0 0 1-3 3" /></g><defs><clipPath id="shopping-bag-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgShoppingBagFill);
const Memo = memo(ForwardRef);
export default Memo;