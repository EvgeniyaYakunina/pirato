import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTrashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#trash-fill_svg__a)"><path fill="#000" d="M13.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3A1.5 1.5 0 0 0 5 2.5V3H2.5a.5.5 0 1 0 0 1H3v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4h.5a.5.5 0 0 0 0-1M7 10.5a.5.5 0 0 1-1 0v-4a.5.5 0 1 1 1 0zm3 0a.5.5 0 0 1-1 0v-4a.5.5 0 1 1 1 0zM10 3H6v-.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5z" /></g><defs><clipPath id="trash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTrashFill);
const Memo = memo(ForwardRef);
export default Memo;