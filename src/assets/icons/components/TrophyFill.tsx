import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTrophyFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#trophy-fill_svg__a)"><path fill="#000" d="M14.5 4H13V3a.5.5 0 0 0-.5-.5h-9A.5.5 0 0 0 3 3v1H1.5a1 1 0 0 0-1 1v1A2.5 2.5 0 0 0 3 8.5h.228A5.01 5.01 0 0 0 7.5 11.976V13.5H6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H8.5v-1.526c1.996-.202 3.653-1.603 4.255-3.474H13A2.5 2.5 0 0 0 15.5 6V5a1 1 0 0 0-1-1M3 7.5A1.5 1.5 0 0 1 1.5 6V5H3v2q0 .25.024.5zM14.5 6A1.5 1.5 0 0 1 13 7.5h-.031q.03-.277.031-.556V5h1.5z" /></g><defs><clipPath id="trophy-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTrophyFill);
const Memo = memo(ForwardRef);
export default Memo;