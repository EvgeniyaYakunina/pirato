import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDownloadSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#download-simple-fill_svg__a)"><path fill="#000" d="M14 9v4a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 2 13V9a.5.5 0 1 1 1 0v3.5h10V9a.5.5 0 0 1 1 0m-6.354.354a.5.5 0 0 0 .708 0l2.5-2.5A.5.5 0 0 0 10.5 6h-2V2a.5.5 0 1 0-1 0v4h-2a.5.5 0 0 0-.354.854z" /></g><defs><clipPath id="download-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDownloadSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;