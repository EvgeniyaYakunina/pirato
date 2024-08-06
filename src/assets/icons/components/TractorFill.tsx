import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTractorFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tractor-fill_svg__a)"><path fill="#000" d="M5 10.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.5 0a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0m-1.5 0a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0m9.5 1a2.25 2.25 0 0 1-4.486.25H9a.5.5 0 0 1-.5-.5v-.75A4.254 4.254 0 0 0 4.25 6.5H2.5a.5.5 0 0 1 0-1H3v-2h-.5a.5.5 0 0 1 0-1H10a.5.5 0 0 1 0 1h-.5v2.617l1.5.407V4.5a.5.5 0 0 1 1 0v2.294l2.274.617.014.003a.99.99 0 0 1 .712.961v1.966c.323.399.5.896.5 1.409m-1.25 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0" /></g><defs><clipPath id="tractor-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTractorFill);
const Memo = memo(ForwardRef);
export default Memo;