import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgControlFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#control-fill_svg__a)"><path fill="#000" d="M12.962 7.691A.5.5 0 0 1 12.5 8h-9a.5.5 0 0 1-.354-.854l4.5-4.5a.5.5 0 0 1 .708 0l4.5 4.5a.5.5 0 0 1 .108.545" /></g><defs><clipPath id="control-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgControlFill);
const Memo = memo(ForwardRef);
export default Memo;