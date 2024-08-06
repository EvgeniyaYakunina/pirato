import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCropFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#crop-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M7.5 5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V6H7.5a.5.5 0 1 1 0-1m4.5 6h-1v1a.5.5 0 0 1-1 0v-1H5.5a.5.5 0 0 1-.5-.5V6H4a.5.5 0 1 1 0-1h1V4a.5.5 0 1 1 1 0v6h6a.5.5 0 0 1 0 1" /></g><defs><clipPath id="crop-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCropFill);
const Memo = memo(ForwardRef);
export default Memo;