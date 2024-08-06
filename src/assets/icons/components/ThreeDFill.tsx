import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgThreeDFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#three-d-fill_svg__a)"><path fill="#000" d="M11.5 8a2 2 0 0 1-2 2H9V6h.5a2 2 0 0 1 2 2m3-4.5v9a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1M7 9a2 2 0 0 0-1.144-1.807L6.9 5.8a.5.5 0 0 0-.4-.8H4a.5.5 0 1 0 0 1h1.5l-.9 1.2A.5.5 0 0 0 5 8a1 1 0 1 1-.666 1.746.5.5 0 0 0-.668.745A2 2 0 0 0 7 9m5.5-1a3.003 3.003 0 0 0-3-3h-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h1a3.003 3.003 0 0 0 3-3" /></g><defs><clipPath id="three-d-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgThreeDFill);
const Memo = memo(ForwardRef);
export default Memo;