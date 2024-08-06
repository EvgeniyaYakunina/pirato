import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgOptionFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#option-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-1 8.5H9.559a.99.99 0 0 1-.895-.553L6.441 6H3.5a.5.5 0 1 1 0-1h2.941a1 1 0 0 1 .895.553L9.559 10H12.5a.5.5 0 0 1 0 1m0-5h-3a.5.5 0 1 1 0-1h3a.5.5 0 0 1 0 1" /></g><defs><clipPath id="option-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgOptionFill);
const Memo = memo(ForwardRef);
export default Memo;