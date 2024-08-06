import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFanFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#fan-fill_svg__a)"><path fill="#000" d="M14.563 8.438A3.75 3.75 0 0 0 8.96 6.222l1.025-4.09a.5.5 0 0 0-.216-.543 3.75 3.75 0 1 0-3.79 6.468L1.927 9.215a.5.5 0 0 0-.362.458 3.75 3.75 0 1 0 7.495.045l3.03 2.933a.5.5 0 0 0 .578.084 3.75 3.75 0 0 0 1.896-4.297m-6.41.803a1.25 1.25 0 1 1-.305-2.482 1.25 1.25 0 0 1 .305 2.482" /></g><defs><clipPath id="fan-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFanFill);
const Memo = memo(ForwardRef);
export default Memo;