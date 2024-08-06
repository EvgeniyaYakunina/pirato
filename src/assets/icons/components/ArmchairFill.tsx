import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArmchairFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#armchair-fill_svg__a)"><path fill="#000" d="M15 8.25a1.75 1.75 0 0 1-1.5 1.732V12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V9.982a1.75 1.75 0 1 1 2-1.732v2.25a.5.5 0 0 0 1 0V9h5v1.5a.5.5 0 0 0 1 0V8.25a1.75 1.75 0 0 1 3.5 0M2.75 5.5A2.754 2.754 0 0 1 5.488 8h5.024a2.753 2.753 0 0 1 2.738-2.5.25.25 0 0 0 .25-.25V4.5A2.5 2.5 0 0 0 11 2H5a2.5 2.5 0 0 0-2.5 2.5v.75a.25.25 0 0 0 .25.25" /></g><defs><clipPath id="armchair-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArmchairFill);
const Memo = memo(ForwardRef);
export default Memo;