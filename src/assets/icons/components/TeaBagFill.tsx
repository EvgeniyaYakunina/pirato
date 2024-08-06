import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTeaBagFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tea-bag-fill_svg__a)"><path fill="#000" d="M7 8.5v-4h1.217a1 1 0 0 1 .857.486l1.284 2.139c.093.156.142.334.142.515v5.86a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V7.639c0-.181.05-.359.143-.514l1.283-2.14a1 1 0 0 1 .857-.485H6v4a.5.5 0 1 0 1 0m7 1.5a1 1 0 0 1-1-1V4a3.5 3.5 0 1 0-7 0v.5h1V4a2.5 2.5 0 1 1 5 0v5a2 2 0 0 0 2 2 .5.5 0 0 0 0-1" /></g><defs><clipPath id="tea-bag-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTeaBagFill);
const Memo = memo(ForwardRef);
export default Memo;