import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFileArrowDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#file-arrow-down-fill_svg__a)"><path fill="#000" d="m13.354 5.146-3.5-3.5A.5.5 0 0 0 9.5 1.5h-6a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-8a.5.5 0 0 0-.146-.354m-3.5 5.208-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708l.646.647V7.5a.5.5 0 1 1 1 0v2.793l.646-.647a.5.5 0 1 1 .708.708M9.5 5.5V2.75l2.75 2.75z" /></g><defs><clipPath id="file-arrow-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFileArrowDownFill);
const Memo = memo(ForwardRef);
export default Memo;