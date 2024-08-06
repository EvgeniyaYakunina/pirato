import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCubeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cube-fill_svg__a)"><path fill="#000" d="m13.98 4.134-5.5-3.01a.99.99 0 0 0-.96 0l-5.5 3.011a1 1 0 0 0-.52.875v5.978a1 1 0 0 0 .52.875l5.5 3.01a.99.99 0 0 0 .96 0l5.5-3.01a1 1 0 0 0 .52-.875V5.01a1 1 0 0 0-.52-.877M8 7.5 2.978 4.75 8 2l5.022 2.75zm.5 6.227V8.364l5-2.736v5.36z" /></g><defs><clipPath id="cube-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCubeFill);
const Memo = memo(ForwardRef);
export default Memo;