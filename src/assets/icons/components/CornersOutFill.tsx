import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCornersOutFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#corners-out-fill_svg__a)"><path fill="#000" d="M13.5 3v2.5a.5.5 0 0 1-.854.354l-2.5-2.5A.5.5 0 0 1 10.5 2.5H13a.5.5 0 0 1 .5.5M3.354 10.146a.5.5 0 0 0-.854.354V13a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .354-.854zm9.837-.108a.5.5 0 0 0-.545.108l-2.5 2.5a.501.501 0 0 0 .354.854H13a.5.5 0 0 0 .5-.5v-2.5a.5.5 0 0 0-.309-.462M5.5 2.5H3a.5.5 0 0 0-.5.5v2.5a.5.5 0 0 0 .854.354l2.5-2.5A.5.5 0 0 0 5.5 2.5" /></g><defs><clipPath id="corners-out-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCornersOutFill);
const Memo = memo(ForwardRef);
export default Memo;