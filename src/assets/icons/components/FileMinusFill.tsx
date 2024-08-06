import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFileMinusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#file-minus-fill_svg__a)"><path fill="#000" d="m13.354 5.146-3.5-3.5A.5.5 0 0 0 9.5 1.5h-6a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-8a.5.5 0 0 0-.146-.354M9.5 10h-3a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1m0-4.5V2.707L12.293 5.5z" /></g><defs><clipPath id="file-minus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFileMinusFill);
const Memo = memo(ForwardRef);
export default Memo;