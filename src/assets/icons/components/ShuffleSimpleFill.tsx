import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShuffleSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#shuffle-simple-fill_svg__a)"><path fill="#000" d="M13.5 3v2.5a.5.5 0 0 1-.854.354l-.896-.897-1.982 1.98a.5.5 0 0 1-.705-.704l1.98-1.983-.897-.896A.5.5 0 0 1 10.5 2.5H13a.5.5 0 0 1 .5.5m-.309 7.038a.5.5 0 0 0-.545.108l-.896.897-8.396-8.397a.5.5 0 0 0-.708.708l8.397 8.396-.897.896a.5.5 0 0 0 .354.854H13a.5.5 0 0 0 .5-.5v-2.5a.5.5 0 0 0-.309-.462m-6.958-.975-3.587 3.583a.5.5 0 0 0 .708.708l3.584-3.586a.5.5 0 0 0-.705-.705" /></g><defs><clipPath id="shuffle-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgShuffleSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;