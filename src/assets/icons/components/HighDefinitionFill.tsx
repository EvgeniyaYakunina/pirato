import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHighDefinitionFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#high-definition-fill_svg__a)"><path fill="#000" d="M12.25 8a2 2 0 0 1-2 2H9.5V6h.75a2 2 0 0 1 2 2m2.25-4.5v9a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1m-7 2a.5.5 0 1 0-1 0v2H4v-2a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0v-2h2.5v2a.5.5 0 0 0 1 0zM13.25 8a3.003 3.003 0 0 0-3-3H9a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h1.25a3.003 3.003 0 0 0 3-3" /></g><defs><clipPath id="high-definition-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHighDefinitionFill);
const Memo = memo(ForwardRef);
export default Memo;