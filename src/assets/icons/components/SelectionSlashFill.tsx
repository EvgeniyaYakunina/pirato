import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSelectionSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#selection-slash-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M9.5 3.5h2a1 1 0 0 1 1 1v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 1 1 0-1m-3 9h-2a1 1 0 0 1-1-1v-2a.5.5 0 1 1 1 0v2h2a.5.5 0 0 1 0 1m6.354.354a.503.503 0 0 1-.708 0l-.353-.354H9.5a.5.5 0 0 1 0-1h1.293L4.5 5.207V6.5a.5.5 0 1 1-1 0V4.207l-.354-.353a.5.5 0 1 1 .708-.708l.5.5 8.5 8.5a.503.503 0 0 1 0 .708" /></g><defs><clipPath id="selection-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSelectionSlashFill);
const Memo = memo(ForwardRef);
export default Memo;