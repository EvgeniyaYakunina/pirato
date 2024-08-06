import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUploadSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#upload-simple-fill_svg__a)"><path fill="#000" d="M14 9v4a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 2 13V9a.5.5 0 0 1 1 0v3.5h10V9a.5.5 0 0 1 1 0M5.5 5h2v4a.5.5 0 0 0 1 0V5h2a.5.5 0 0 0 .354-.854l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5A.5.5 0 0 0 5.5 5" /></g><defs><clipPath id="upload-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgUploadSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;