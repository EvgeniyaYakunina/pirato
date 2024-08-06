import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNotMemberOfFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#not-member-of-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1.125 2.33L9.102 7.5H11a.5.5 0 0 1 0 1H8.227l-1.798 2.054A3 3 0 0 0 8 11h3a.5.5 0 0 1 0 1H8c-.797 0-1.577-.24-2.236-.687l-.889 1.016a.5.5 0 0 1-.75-.658l.888-1.015A4 4 0 0 1 8 4h2.836l.289-.33a.501.501 0 1 1 .75.66M8 5h1.96L7.774 7.5h-2.73A3.004 3.004 0 0 1 8 5M5.043 8.5h1.855l-1.22 1.395A3 3 0 0 1 5.043 8.5" /></g><defs><clipPath id="not-member-of-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNotMemberOfFill);
const Memo = memo(ForwardRef);
export default Memo;