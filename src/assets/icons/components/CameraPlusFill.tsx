import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCameraPlusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#camera-plus-fill_svg__a)"><path fill="#000" d="M13 3.5h-1.732l-.706-1.055A1 1 0 0 0 9.733 2H6.268a1 1 0 0 0-.83.445L4.733 3.5H3A1.5 1.5 0 0 0 1.5 5v7A1.5 1.5 0 0 0 3 13.5h10a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 13 3.5M10 9H8.5v1.5a.5.5 0 0 1-1 0V9H6a.5.5 0 1 1 0-1h1.5V6.5a.5.5 0 1 1 1 0V8H10a.5.5 0 0 1 0 1" /></g><defs><clipPath id="camera-plus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCameraPlusFill);
const Memo = memo(ForwardRef);
export default Memo;