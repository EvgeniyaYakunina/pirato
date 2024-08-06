import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSquareHalfBottomFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#square-half-bottom-fill_svg__a)"><path fill="#000" d="M12.5 2.5h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m0 1V8h-9V3.5z" /></g><defs><clipPath id="square-half-bottom-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSquareHalfBottomFill);
const Memo = memo(ForwardRef);
export default Memo;