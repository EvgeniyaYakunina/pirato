import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCameraFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#camera-fill_svg__a)"><path fill="#000" d="M13 3.5h-1.732l-.852-1.277A.5.5 0 0 0 10 2H6a.5.5 0 0 0-.416.223L4.732 3.5H3A1.5 1.5 0 0 0 1.5 5v7A1.5 1.5 0 0 0 3 13.5h10a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 13 3.5m-2.75 4.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0" /></g><defs><clipPath id="camera-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCameraFill);
const Memo = memo(ForwardRef);
export default Memo;