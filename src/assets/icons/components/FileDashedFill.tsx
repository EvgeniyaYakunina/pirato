import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFileDashedFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#file-dashed-fill_svg__a)"><path fill="#000" d="M5 14a.5.5 0 0 1-.5.5h-1a1 1 0 0 1-1-1v-2a.5.5 0 0 1 1 0v2h1a.5.5 0 0 1 .5.5m8.354-8.854-3.5-3.5A.5.5 0 0 0 9.5 1.5h-2a.5.5 0 1 0 0 1H9v3a.5.5 0 0 0 .5.5h3v2.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.146-.354M5 1.5H3.5a1 1 0 0 0-1 1V4a.5.5 0 1 0 1 0V2.5H5a.5.5 0 1 0 0-1m8 9a.5.5 0 0 0-.5.5v2.5H12a.5.5 0 0 0 0 1h.5a1 1 0 0 0 1-1V11a.5.5 0 0 0-.5-.5m-10-1a.5.5 0 0 0 .5-.5V6.5a.5.5 0 1 0-1 0V9a.5.5 0 0 0 .5.5m6.5 4H7a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1" /></g><defs><clipPath id="file-dashed-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFileDashedFill);
const Memo = memo(ForwardRef);
export default Memo;