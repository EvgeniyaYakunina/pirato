import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPaintBrushHouseholdFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#paint-brush-household-fill_svg__a)"><path fill="#000" d="M14.415 1.585a2 2 0 0 0-2.855.028l-3.338 3.9-.66-.66a1.5 1.5 0 0 0-2.121 0L.648 9.645a.5.5 0 0 0 0 .707l5 5a.5.5 0 0 0 .706 0l4.794-4.79a1.5 1.5 0 0 0 0-2.122l-.662-.661 3.9-3.343.03-.026a2 2 0 0 0 0-2.826M6 14.293 4.958 13.25l1.396-1.397a.5.5 0 0 0-.707-.707L4.25 12.542l-.792-.792 1.396-1.397a.5.5 0 0 0-.707-.707L2.75 11.042 1.707 10l3.147-3.146 4.293 4.293z" /></g><defs><clipPath id="paint-brush-household-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPaintBrushHouseholdFill);
const Memo = memo(ForwardRef);
export default Memo;