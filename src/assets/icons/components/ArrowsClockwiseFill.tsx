import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowsClockwiseFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrows-clockwise-fill_svg__a)"><path fill="#000" d="M14 3v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.354-.854L11.291 4.5a4.97 4.97 0 0 0-3.42-1.38h-.029A4.97 4.97 0 0 0 4.35 4.543a.5.5 0 0 1-.698-.715A6 6 0 0 1 12 3.794l1.148-1.148A.5.5 0 0 1 14 3m-2.35 8.456a5 5 0 0 1-6.94.044l1.144-1.144A.5.5 0 0 0 5.5 9.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .854.354L4 12.206a5.96 5.96 0 0 0 4.125 1.673h.033a5.96 5.96 0 0 0 4.192-1.708.5.5 0 0 0-.699-.715" /></g><defs><clipPath id="arrows-clockwise-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowsClockwiseFill);
const Memo = memo(ForwardRef);
export default Memo;