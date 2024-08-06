import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSimCardFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#sim-card-fill_svg__a)"><path fill="#000" d="m13.354 5.146-3.5-3.5A.5.5 0 0 0 9.5 1.5h-6a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-8a.5.5 0 0 0-.146-.354M11.5 12a.5.5 0 0 1-.5.5h-1a.25.25 0 0 1-.25-.25v-2.233a.51.51 0 0 0-.467-.516.5.5 0 0 0-.533.5v2.25a.25.25 0 0 1-.25.25h-1a.25.25 0 0 1-.25-.25v-2.234a.51.51 0 0 0-.467-.516.5.5 0 0 0-.533.5v2.25a.25.25 0 0 1-.25.25H5a.5.5 0 0 1-.5-.5V8.5A.5.5 0 0 1 5 8h6a.5.5 0 0 1 .5.5z" /></g><defs><clipPath id="sim-card-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSimCardFill);
const Memo = memo(ForwardRef);
export default Memo;