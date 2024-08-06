import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMathOperationsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#math-operations-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M9.146 4.854a.5.5 0 1 1 .708-.708l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646zM7 11H6v1a.5.5 0 0 1-1 0v-1H4a.5.5 0 0 1 0-1h1V9a.5.5 0 1 1 1 0v1h1a.5.5 0 0 1 0 1m0-5H4a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1m5 6H9a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1m0-2H9a.5.5 0 1 1 0-1h3a.5.5 0 0 1 0 1" /></g><defs><clipPath id="math-operations-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMathOperationsFill);
const Memo = memo(ForwardRef);
export default Memo;