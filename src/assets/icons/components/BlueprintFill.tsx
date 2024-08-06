import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBlueprintFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#blueprint-fill_svg__a)"><path fill="#000" d="M8.5 7.5H10v1H8.5zM15 4v8.5a.5.5 0 0 1-.5.5H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1a.5.5 0 0 1 .5.5v1h10a.5.5 0 0 1 .5.5M3.5 3H3a1 1 0 0 0-1 1v5.268A2 2 0 0 1 3 9h.5zM11 8.5v-1h1a.5.5 0 0 0 0-1h-1V6a.5.5 0 0 0-1 0v.5H8.5V6a.5.5 0 1 0-1 0v.5h-1a.5.5 0 1 0 0 1h1v1h-1a.5.5 0 1 0 0 1h1v.5a.5.5 0 0 0 1 0v-.5H10v.5a.5.5 0 0 0 1 0v-.5h1a.5.5 0 0 0 0-1z" /></g><defs><clipPath id="blueprint-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBlueprintFill);
const Memo = memo(ForwardRef);
export default Memo;