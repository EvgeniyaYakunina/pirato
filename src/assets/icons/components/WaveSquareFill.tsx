import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWaveSquareFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#wave-square-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-.5 8a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V6H4v2a.5.5 0 1 1-1 0V5.5a.5.5 0 0 1 .5-.5H8a.5.5 0 0 1 .5.5V10H12V8a.5.5 0 0 1 1 0z" /></g><defs><clipPath id="wave-square-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgWaveSquareFill);
const Memo = memo(ForwardRef);
export default Memo;