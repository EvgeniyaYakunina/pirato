import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBoundingBoxFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bounding-box-fill_svg__a)"><path fill="#000" d="M13 6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.5H6V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.5v4H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.5h4v.5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-.5V6zm-1.5 4H11a1 1 0 0 0-1 1v.5H6V11a1 1 0 0 0-1-1h-.5V6H5a1 1 0 0 0 1-1v-.5h4V5a1 1 0 0 0 1 1h.5z" /></g><defs><clipPath id="bounding-box-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBoundingBoxFill);
const Memo = memo(ForwardRef);
export default Memo;