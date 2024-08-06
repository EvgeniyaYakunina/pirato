import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPaintBrushBroadFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#paint-brush-broad-fill_svg__a)"><path fill="#000" d="M13.5 1.5h-9A2.5 2.5 0 0 0 2 4v4.5A1.5 1.5 0 0 0 3.5 10h3l-.493 2.917A1 1 0 0 0 6 13a2 2 0 0 0 4 0 1 1 0 0 0-.007-.083L9.5 10h3A1.5 1.5 0 0 0 14 8.5V2a.5.5 0 0 0-.5-.5m-9 1H11V5a.5.5 0 0 0 1 0V2.5h1V7H3V4a1.5 1.5 0 0 1 1.5-1.5" /></g><defs><clipPath id="paint-brush-broad-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPaintBrushBroadFill);
const Memo = memo(ForwardRef);
export default Memo;