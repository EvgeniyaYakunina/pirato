import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPuzzlePieceFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#puzzle-piece-fill_svg__a)"><path fill="#000" d="M10.361 14H13a1 1 0 0 0 1-1v-2.353a.5.5 0 0 0-.691-.46 1.5 1.5 0 0 1-.559.111c-.827 0-1.5-.694-1.5-1.546 0-.851.673-1.545 1.5-1.545.192 0 .382.037.559.11A.5.5 0 0 0 14 6.853V4.5a1 1 0 0 0-1-1h-2.264q.014-.124.014-.25a2.25 2.25 0 1 0-4.486.25H4a1 1 0 0 0-1 1v2.014a2.25 2.25 0 1 0 0 4.472V13a1 1 0 0 0 1 1h2.639" /></g><defs><clipPath id="puzzle-piece-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPuzzlePieceFill);
const Memo = memo(ForwardRef);
export default Memo;