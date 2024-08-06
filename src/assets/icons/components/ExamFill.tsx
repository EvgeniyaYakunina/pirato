import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgExamFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#exam-fill_svg__a)"><path fill="#000" d="M6 7.118 6.691 8.5H5.31zM14.5 3.5v10a.5.5 0 0 1-.724.447L12 13.06l-1.776.889a.5.5 0 0 1-.448 0L8 13.058l-1.776.89a.5.5 0 0 1-.448 0L4 13.058l-1.776.89A.5.5 0 0 1 1.5 13.5v-10a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1M8.448 9.776l-2-4a.5.5 0 0 0-.896 0l-2 4a.5.5 0 0 0 .895.448L4.81 9.5H7.19l.362.724a.502.502 0 0 0 .894-.448M13 8a.5.5 0 0 0-.5-.5h-1v-1a.5.5 0 0 0-1 0v1h-1a.5.5 0 1 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1A.5.5 0 0 0 13 8" /></g><defs><clipPath id="exam-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgExamFill);
const Memo = memo(ForwardRef);
export default Memo;