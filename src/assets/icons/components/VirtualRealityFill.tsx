import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVirtualRealityFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#virtual-reality-fill_svg__a)"><path fill="#000" d="M11 3H5a5 5 0 1 0 0 10h6a5 5 0 1 0 0-10M7.718 6.176l-1.5 4a.5.5 0 0 1-.937 0l-1.5-4a.5.5 0 1 1 .937-.352l1.032 2.75 1.032-2.75a.5.5 0 1 1 .937.352m4.22 3.574a.5.5 0 1 1-.87.496l-.714-1.25-.1.003H9.5v1a.5.5 0 1 1-1 0V6a.5.5 0 0 1 .5-.5h1.25a1.75 1.75 0 0 1 1.053 3.147zM11 7.25a.75.75 0 0 1-.75.75H9.5V6.5h.75a.75.75 0 0 1 .75.75" /></g><defs><clipPath id="virtual-reality-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgVirtualRealityFill);
const Memo = memo(ForwardRef);
export default Memo;