import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgScalesFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#scales-fill_svg__a)"><path fill="#000" d="m14.964 8.313-2-5a.5.5 0 0 0-.572-.3L8.5 3.875V2.5a.5.5 0 1 0-1 0v1.599l-4.108.914a.5.5 0 0 0-.356.3l-2 5A.5.5 0 0 0 1 10.5c0 1.457 1.534 2 2.5 2s2.5-.543 2.5-2a.5.5 0 0 0-.036-.187L4.183 5.86 7.5 5.125V13h-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-1V4.901l3.188-.707-1.652 4.119A.5.5 0 0 0 10 8.5c0 1.457 1.534 2 2.5 2s2.5-.543 2.5-2a.5.5 0 0 0-.036-.187m-10 2.187H2.04L3.5 6.846zm6.078-2L12.5 4.846 13.961 8.5z" /></g><defs><clipPath id="scales-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgScalesFill);
const Memo = memo(ForwardRef);
export default Memo;