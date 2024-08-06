import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgExportFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#export-fill_svg__a)"><path fill="#000" d="M13.5 7v6a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4v3a.5.5 0 0 0 1 0V6h4a1 1 0 0 1 1 1m-5-4.293 1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 1 0 .708.708L7.5 2.707V6h1z" /></g><defs><clipPath id="export-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgExportFill);
const Memo = memo(ForwardRef);
export default Memo;