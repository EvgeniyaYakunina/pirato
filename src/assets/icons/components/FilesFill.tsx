import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFilesFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#files-fill_svg__a)"><path fill="#000" d="m13.354 4.146-2.5-2.5A.5.5 0 0 0 10.5 1.5h-5a1 1 0 0 0-1 1v1h-1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1v-7a.5.5 0 0 0-.146-.354M8.5 12h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1m0-2h-3a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1m4 1.5h-1v-5a.5.5 0 0 0-.146-.354l-2.5-2.5A.5.5 0 0 0 8.5 3.5h-3v-1h4.793L12.5 4.707z" /></g><defs><clipPath id="files-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFilesFill);
const Memo = memo(ForwardRef);
export default Memo;