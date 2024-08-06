import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUploadFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#upload-fill_svg__a)"><path fill="#000" d="M4.646 4.854a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V8a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 0 1-.708 0M15 8.5v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4.25a.25.25 0 0 1 .25.25v.216c0 .84.688 1.55 1.529 1.534A1.5 1.5 0 0 0 9.5 8v-.25a.25.25 0 0 1 .25-.25H14a1 1 0 0 1 1 1m-2.5 2a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0" /></g><defs><clipPath id="upload-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgUploadFill);
const Memo = memo(ForwardRef);
export default Memo;