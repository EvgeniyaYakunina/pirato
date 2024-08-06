import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNotEqualsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#not-equals-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1.5 7a.5.5 0 0 1 0 1H6.914l-2.039 2.33a.5.5 0 0 1-.75-.66L5.585 10H4.5a.5.5 0 1 1 0-1h1.96l1.75-2H4.5a.5.5 0 1 1 0-1h4.586l2.039-2.33a.501.501 0 1 1 .75.66L10.415 6H11.5a.5.5 0 0 1 0 1H9.54L7.79 9z" /></g><defs><clipPath id="not-equals-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNotEqualsFill);
const Memo = memo(ForwardRef);
export default Memo;