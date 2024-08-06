import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPerspectiveFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#perspective-fill_svg__a)"><path fill="#000" d="M15.5 8.5a.5.5 0 0 1-.5.5h-1v4a1 1 0 0 1-1.18.984l-10-1.819a1 1 0 0 1-.82-.983V9H1a.5.5 0 0 1 0-1h14a.5.5 0 0 1 .5.5M2.25 7h11.5a.25.25 0 0 0 .25-.25V3.026a1 1 0 0 0-1.179-1.01l-10 1.818A1 1 0 0 0 2 4.818V6.75a.25.25 0 0 0 .25.25" /></g><defs><clipPath id="perspective-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPerspectiveFill);
const Memo = memo(ForwardRef);
export default Memo;