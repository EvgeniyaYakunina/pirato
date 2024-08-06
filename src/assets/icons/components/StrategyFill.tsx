import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStrategyFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#strategy-fill_svg__a)"><path fill="#000" d="M6.75 11.75a2 2 0 1 1-4 0 2 2 0 0 1 4 0M3.354 7.354l.896-.897.896.897a.5.5 0 1 0 .708-.708l-.897-.896.897-.896a.5.5 0 1 0-.708-.708l-.896.897-.896-.897a.5.5 0 1 0-.708.708l.897.896-.897.896a.5.5 0 0 0 .708.708m10.103 4.396.897-.896a.5.5 0 0 0-.708-.708l-.896.897-.896-.897a.5.5 0 0 0-.708.708l.897.896-.897.896a.5.5 0 0 0 .708.708l.896-.897.896.897a.5.5 0 1 0 .708-.708zm-3.103-8.604L10.207 3H11.5a.5.5 0 0 0 0-1H9a.5.5 0 0 0-.5.5V5a.5.5 0 1 0 1 0V3.707l.146.147c1.12 1.12 1.119 2.212.92 2.931-.29 1.048-1.21 1.986-2.188 2.23a.5.5 0 1 0 .244.97c1.326-.331 2.522-1.537 2.908-2.933.381-1.378-.036-2.765-1.176-3.906" /></g><defs><clipPath id="strategy-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStrategyFill);
const Memo = memo(ForwardRef);
export default Memo;