import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAirplaneFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#airplane-fill_svg__a)"><path fill="#000" d="M15 8.5v2a.5.5 0 0 1-.598.49l-4.652-.928v1.484l1.104 1.103A.5.5 0 0 1 11 13v1.5a.502.502 0 0 1-.687.464L8 14.04l-2.312.925A.5.5 0 0 1 5 14.5V13a.5.5 0 0 1 .146-.354l1.104-1.103v-1.48l-4.652.927A.5.5 0 0 1 1 10.5v-2a.5.5 0 0 1 .276-.447L6.25 5.566V2.75a1.75 1.75 0 1 1 3.5 0v2.816l4.974 2.487A.5.5 0 0 1 15 8.5" /></g><defs><clipPath id="airplane-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAirplaneFill);
const Memo = memo(ForwardRef);
export default Memo;