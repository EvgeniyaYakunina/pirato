import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMoneyWavyFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#money-wavy-fill_svg__a)"><path fill="#000" d="M15.265 3.75a.5.5 0 0 0-.484-.025c-2.684 1.313-4.6.698-6.625.049-2.131-.678-4.331-1.381-7.375.105a.5.5 0 0 0-.281.449v7.495a.5.5 0 0 0 .72.45c2.682-1.313 4.599-.698 6.627-.049 1.203.384 2.428.776 3.813.776 1.068 0 2.233-.232 3.557-.879a.5.5 0 0 0 .28-.448V4.177a.5.5 0 0 0-.232-.427M3 9.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0zm5 .5a2 2 0 1 1 0-4 2 2 0 0 1 0 4m6 .5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0z" /></g><defs><clipPath id="money-wavy-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMoneyWavyFill);
const Memo = memo(ForwardRef);
export default Memo;