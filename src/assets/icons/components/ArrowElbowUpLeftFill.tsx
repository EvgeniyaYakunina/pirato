import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowElbowUpLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-elbow-up-left-fill_svg__a)"><path fill="#000" d="M12.5 5v9a.5.5 0 0 1-1 0V5.5h-5V8a.5.5 0 0 1-.854.354l-3-3a.5.5 0 0 1 0-.708l3-3A.5.5 0 0 1 6.5 2v2.5H12a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="arrow-elbow-up-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowElbowUpLeftFill);
const Memo = memo(ForwardRef);
export default Memo;