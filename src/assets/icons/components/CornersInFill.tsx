import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCornersInFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#corners-in-fill_svg__a)"><path fill="#000" d="M9.5 6V3a.5.5 0 0 1 .854-.354l3 3A.5.5 0 0 1 13 6.5h-3a.5.5 0 0 1-.5-.5M6 9.5H3a.5.5 0 0 0-.354.854l3 3A.5.5 0 0 0 6.5 13v-3a.5.5 0 0 0-.5-.5m.191-6.962a.5.5 0 0 0-.545.108l-3 3A.5.5 0 0 0 3 6.5h3a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.309-.462M13 9.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .854.354l3-3A.501.501 0 0 0 13 9.5" /></g><defs><clipPath id="corners-in-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCornersInFill);
const Memo = memo(ForwardRef);
export default Memo;