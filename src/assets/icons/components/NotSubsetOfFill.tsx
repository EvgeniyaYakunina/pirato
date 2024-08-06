import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNotSubsetOfFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#not-subset-of-fill_svg__a)"><path fill="#000" d="M8 5h1.96L5.678 9.896A3 3 0 0 1 8 5m6-2v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1m-2.17.625a.5.5 0 0 0-.706.047L10.836 4H8a4 4 0 0 0-2.988 6.656l-.887 1.015a.5.5 0 0 0 .75.658l.889-1.017C6.424 11.762 7.203 12 8 12h3a.5.5 0 0 0 0-1H8a3 3 0 0 1-1.57-.446l5.445-6.225a.5.5 0 0 0-.046-.704" /></g><defs><clipPath id="not-subset-of-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNotSubsetOfFill);
const Memo = memo(ForwardRef);
export default Memo;