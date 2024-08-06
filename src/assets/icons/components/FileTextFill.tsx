import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFileTextFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#file-text-fill_svg__a)"><path fill="#000" d="m13.354 5.146-3.5-3.5A.5.5 0 0 0 9.5 1.5h-6a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-8a.5.5 0 0 0-.146-.354M10 11H6a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1m0-2H6a.5.5 0 1 1 0-1h4a.5.5 0 0 1 0 1m-.5-3.5V2.75l2.75 2.75z" /></g><defs><clipPath id="file-text-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFileTextFill);
const Memo = memo(ForwardRef);
export default Memo;