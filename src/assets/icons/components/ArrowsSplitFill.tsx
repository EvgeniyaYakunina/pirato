import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowsSplitFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrows-split-fill_svg__a)"><path fill="#000" d="m14.354 11.854-2 2a.503.503 0 0 1-.708 0l-2-2A.5.5 0 0 1 10 11h1.5V8.707L8 5.207l-3.5 3.5V11H6a.5.5 0 0 1 .354.854l-2 2a.5.5 0 0 1-.708 0l-2-2A.5.5 0 0 1 2 11h1.5V8.5a.5.5 0 0 1 .146-.354L7.5 4.293V1.5a.5.5 0 1 1 1 0v2.793l3.854 3.853a.5.5 0 0 1 .146.354V11H14a.5.5 0 0 1 .354.854" /></g><defs><clipPath id="arrows-split-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowsSplitFill);
const Memo = memo(ForwardRef);
export default Memo;