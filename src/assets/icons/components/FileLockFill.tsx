import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFileLockFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#file-lock-fill_svg__a)"><path fill="#000" d="M7.5 11H7v-.25a1.75 1.75 0 0 0-3.5 0V11H3a.5.5 0 0 0-.5.5V14a.5.5 0 0 0 .5.5h4.5A.5.5 0 0 0 8 14v-2.5a.5.5 0 0 0-.5-.5M6 11H4.5v-.25a.75.75 0 1 1 1.5 0zm7.354-5.854-3.5-3.5A.5.5 0 0 0 9.5 1.5h-6a1 1 0 0 0-1 1V8a.5.5 0 1 0 1 0V2.5H9v3a.5.5 0 0 0 .5.5h3v7.5H10a.5.5 0 0 0 0 1h2.5a1 1 0 0 0 1-1v-8a.5.5 0 0 0-.146-.354M10 3.206 11.793 5H10z" /></g><defs><clipPath id="file-lock-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFileLockFill);
const Memo = memo(ForwardRef);
export default Memo;